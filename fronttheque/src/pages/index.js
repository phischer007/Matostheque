import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid, Typography, Button, Avatar, Stack, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewNotification } from 'src/sections/overview/overview-notifications';
import { OverviewLatestLoans } from 'src/sections/overview/overview-latest-loans';
import { OverviewLatestMaterials } from 'src/sections/overview/overview-list-last-materials';
import { useEffect, useState, useCallback } from 'react';
import config from 'src/utils/config';
import { useAuth } from 'src/hooks/use-auth';
import { UserIcon } from '@heroicons/react/24/outline';

import { toast } from 'react-toastify';

const Page = () => {
  const auth = useAuth();
  const user = auth.user;
  const [lastMaterialList, setLastMaterialList] = useState(null);
  const [lastLoanList, setLastLoanList] = useState(null);
  const [lastNotificationList, setLastNotificationList] = useState(null);
  const [open, setOpen] = useState(false);
  const [accountChoice, setAccountChoice] = useState("user")

  const onConfirmAccountType = useCallback(async () => {
    try {
      const response = await fetch(`${config.apiUrl}/users/${user.user_id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({role: accountChoice}),
      });

      if (!response.ok) {
        toast.error("An error occurred. Please try again later.", { autoClose: false });
      } else {
        const updatedUserData = await response.json();
        await auth.updateUser(updatedUserData.user_id);
        toast.success("Your account was successfully updated!");
        window.location.reload();
      }
      window.sessionStorage.setItem('isNew', false);
      setOpen(false);

    } catch (error) {
      // Handle unexpected errors
      console.error("An unexpected error occurred:", error);
      toast.error("An unexpected error occurred. Please try again later.", { autoClose: false });
    }

  }, [accountChoice]);

  const selectedStyle = {
    bgcolor: 'primary.main',
    cursor: 'pointer'
  };

  useEffect(() => {
    fetch(`${config.apiUrl}/materials/latest/`)
      .then(response => response.json())
      .then(data => { setLastMaterialList(data); })
      .catch(error => console.error('Error fetching data:', error));

    let loanUrl = !user.is_staff ? `${config.apiUrl}/loans/latest/${user.user_id}/` : `${config.apiUrl}/loans/`
    fetch(loanUrl)
      .then(response => response.json())
      .then(data => {
        let to_loan = !user.is_staff ? data : data.slice(0, 5);
        setLastLoanList(to_loan);
      })
      .catch(error => console.error('Error fetching data:', error));

    fetch(`${config.apiUrl}/notifications/important/${user.user_id}/`)
      .then(response => response.json())
      .then(data => {
        if (data && Array.isArray(data)) {
          const firstThreeRecords = data.slice(0, 2);
          setLastNotificationList(firstThreeRecords);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
    
    let isNew = window.sessionStorage.getItem('isNew');
    if (isNew === 'true') { setOpen(isNew) };
  }, [user]);

  return (
    <>
      <Head>
        <title>
          Dashboard
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
          <Grid
            container
            spacing={3}
            direction="column"
          >
            <Grid
              container
              spacing={3}
              lg={12}
              direction="column"
            >
              {lastNotificationList && lastNotificationList.map((notification) => (
                <Grid key={notification.notif_id} item xs={12} lg={6}>
                  <OverviewNotification data={notification} />
                </Grid>
              ))}
            </Grid>

            <Grid
              xs={12}
              sm={12}
              lg={10}
            >
              <OverviewLatestMaterials
                materials={lastMaterialList}
                sx={{ height: '100%' }}
              />
            </Grid>
            <Grid
              xs={12}
              sm={12}
              lg={10}
            >
              <OverviewLatestLoans
                loans={lastLoanList}
                sx={{ height: '100%' }}
              />
            </Grid>
          </Grid>
          {open &&
            <Dialog
              open={open}
              onClose={() => setOpen(false)}
              disableBackdropClick
              disableEscapeKeyDown
            >
              <DialogTitle>Welcome to Matostheque!</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  We are happy you joined the community. Please choose the type of account you want.
                </DialogContentText>
                <Grid container spacing={2} xs={12} sx={{ my: 2 }} justifyContent="center" alignItems="flex-start">
                  <Grid item xs={5}>
                    <Stack
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                      spacing={1}  // Adjust spacing as needed
                      sx={{ height: '100%' }}  // Ensures the content is centered vertically
                    >
                      <Avatar
                        variant="rounded"
                        onClick={() => {
                          setAccountChoice('user');
                          console.log('USER');
                        }}
                        sx={accountChoice === 'user' ? { ...selectedStyle } : { cursor: 'pointer' }}
                      >
                        <UserIcon style={{ fontSize: 100 }} />
                      </Avatar>
                      <Typography align="center">User</Typography>
                      <Typography align="center" variant="caption">A simple user can view the inventory and borrow equipments.</Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={5}>
                    <Stack
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                      spacing={1}  // Adjust spacing as needed
                      sx={{ height: '100%' }}  // Ensures the content is centered vertically
                    >
                      <Avatar
                        variant="rounded"
                        onClick={() => {
                          setAccountChoice('owner');
                          console.log('OWNER');
                        }}
                        sx={accountChoice === 'owner' ? { ...selectedStyle } : { cursor: 'pointer' }}
                      >
                        <UserIcon style={{ fontSize: 100 }} />
                      </Avatar>
                      <Typography align="center">Owner</Typography>
                      <Typography align="center" variant="caption">An owner provides equipments he/she is willing to lend and can also borrow other equipments.</Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={onConfirmAccountType} color="error">
                  Confirm
                </Button>
              </DialogActions>
            </Dialog>}
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
