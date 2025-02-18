import React, { useCallback, useMemo, useState, useEffect } from 'react';
import Head from 'next/head';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Pagination, Stack, SvgIcon, TablePagination, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { MaterialsCard } from 'src/sections/materials/materialcard';
import { MaterialsSearch } from 'src/sections/materials/materialsearch';
import config from '../utils/config';
import NextLink from 'next/link';
import { useAuth } from 'src/hooks/use-auth';
import { MaterialQRCodeDoc } from 'src/documents/material-qrcode-document';
import { MaterialListDoc } from 'src/documents/material-export-document';
import { PDFDownloadLink } from '@react-pdf/renderer';

const useMaterials = (materials, page, cardPerPage) => {
  return useMemo(() => {
    const startIndex = page * cardPerPage;
    const endIndex = startIndex + cardPerPage;
    return materials?.slice(startIndex, endIndex);
  }, [materials, page, cardPerPage]);
};

const deepSearch = (obj, searchTerm) => {
  const searchableFields = ['material_title', 'owner_first_name', 'owner_last_name', 'material_id', 'team', 'description'];
  let normalizedSearchTerm = searchTerm;
  if (!isNaN(searchTerm)) {
    normalizedSearchTerm = searchTerm.toString().padStart(3, '0');
  }
  for (const key in obj) {
    if (searchableFields.includes(key)) {
      if ((typeof obj[key] === 'string' && obj[key].toLowerCase().includes(normalizedSearchTerm.toLowerCase())) ||
        (key === 'material_id' && String(obj[key]).padStart(3, '0') === normalizedSearchTerm)) {
        return true;
      }
    } else if (typeof obj[key] === 'object' && deepSearch(obj[key], normalizedSearchTerm)) {
      return true;
    }
  }
  return false;
};

const Page = () => {
  const auth = useAuth();
  const user = auth.user;
  const [materialList, setMaterialList] = useState(null);
  const [filteredMaterials, setFilteredMaterials] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [cardPerPage, setRowsPerPage] = useState(16); // default items per page
  const [count, setCount] = useState(1);
  const [qrCodeDataArray, setQrCodeDataArray] = useState(null);

  useEffect(() => {
    fetch(`${config.apiUrl}/materials/`)
      .then(response => response.json())
      .then(data => {
        setMaterialList(data);
        if (data && user.is_staff) {
          setQrCodeDataArray(data.map(material => ({
            qrCodeData: material.qrcode,
            material_id: material.material_id,
            material_title: material.material_title
          })));
        }
        const pageCount = Math.ceil(data.length / cardPerPage); // Calculate pagination count based on fetched data
        setCount(pageCount);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const filtered = searchTerm
      ? materialList.filter(material => deepSearch(material, searchTerm))
      : materialList;
    setFilteredMaterials(filtered);
    const pageCount = Math.ceil(filtered?.length / cardPerPage);
    setCount(pageCount);
  }, [searchTerm, materialList, cardPerPage]);

  const materials = useMaterials(filteredMaterials, page, cardPerPage);

  const handlePageChange = (event, value) => {
    setPage(value - 1); // Subtract 1 from value since the Pagination component starts counting from 1
  };

  const handleRowsPerPageChange = (event) => {
    setCardPerPage(event.target.value);
    setPage(0); // Reset page when changing rows per page
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0); // Reset page when changing search term
  };

  return (
    <>
      <Head>
        <title>
          Materials
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Materials
                </Typography>

                {/* NEW: Availability Filter */}
                {/* <FormControl variant="outlined" sx={{ minWidth: 200 }}>
                  <InputLabel id="availability-filter-label">Availability</InputLabel>
                  <Select
                    labelId="availability-filter-label"
                    id="availability-filter"
                    value={availabilityFilter}
                    onChange={handleAvailabilityFilterChange}
                    label="Availability"
                  >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="available">Available</MenuItem>
                    <MenuItem value="not available">Not Available</MenuItem>
                  </Select>
                </FormControl> */}

                {user.is_staff &&
                  <Stack
                    alignItems="center"
                    direction="row"
                    spacing={1}
                  >
                    <PDFDownloadLink
                      document={<MaterialListDoc
                        materials={materialList ? materialList : []}
                      />}
                      fileName={"Matostheque Material List"}
                    >
                      {({ blob, url, loading, error }) => (
                        <Button
                          color="primary"
                          startIcon={(
                            <SvgIcon fontSize="small">
                              <ArrowDownOnSquareIcon />
                            </SvgIcon>
                          )}
                          style={{ width: '150px' }}
                        >
                          Export list
                        </Button>
                      )}
                    </PDFDownloadLink>
                    <PDFDownloadLink
                      document={<MaterialQRCodeDoc
                        documentData={qrCodeDataArray ? qrCodeDataArray : []}
                      />}
                      fileName={"Matostheqye QRCode list"}
                    >
                      {({ blob, url, loading, error }) => (
                        <Button
                          color="primary"
                          startIcon={(
                            <SvgIcon fontSize="small">
                              <ArrowDownOnSquareIcon />
                            </SvgIcon>
                          )}
                          style={{ width: '200px' }}
                        >
                          Export qrcodes
                        </Button>
                      )}
                    </PDFDownloadLink>
                  </Stack>}
              </Stack>
              <div>
                <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                  component={NextLink}
                  href="/create/create-material"
                >
                  Add
                </Button>
              </div>
            </Stack>

            <MaterialsSearch
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
            />
            <Grid
              container
              spacing={3}
            >
              {materials && materials.map((material) => (
                <Grid
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={material.id}
                >
                  <MaterialsCard material={material} />
                </Grid>
              ))}
            </Grid>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Pagination
                count={count}
                size="small"
                page={page + 1}
                onChange={handlePageChange}
                rowsPerPage={cardPerPage}
                onRowsPerPageChange={handleRowsPerPageChange}
                rowsPerPageOptions={[6, 12, 24]}
                sx={{
                  '& .Mui-selected': {
                    color: 'primary', // Change color of the active page number to red
                  },
                }}
              />
            </Box>

          </Stack>
        </Container>
      </Box>
    </>
  )
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;

