import React, { useCallback, useMemo, useState, useEffect } from 'react';
import Head from 'next/head';
import { Box, Container, Stack, SvgIcon, Typography, Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CreateComment } from 'src/sections/comments/create-comment';
import { CommentThread } from 'src/sections/comments/comments-thread';
import config from 'src/utils/config';
import { useAuth } from 'src/hooks/use-auth';

const Page = () => {
    const [commentsList, setCommentsList] = useState([]);
    const user = useAuth().user;

    useEffect(() => {
        fetch(`${config.apiUrl}/comments/detailed/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setCommentsList(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <Head>
                <title>Threads</title>
            </Head>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 4
                }}
            >
                <Container maxWidth="xl" sx={{ position: 'relative', minHeight: '100%' }}>
                    <Stack
                        container
                        spacing={3}
                        sx={{
                            flexDirection: 'column'
                        }}
                    >
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            spacing={4}
                            item
                        >
                            <Stack spacing={1}>
                                <Typography variant="h4">@Threads</Typography>
                            </Stack>
                        </Stack>
                        <Box sx={{
                            maxHeight: '615px',
                            overflowY: 'auto',
                            scrollbarWidth: 'thin',
                            '&::-ms-scrollbar': {
                                width: '8px',
                                backgroundColor: 'rgba(0, 0, 0, 0.1)'
                            },
                            '&::-ms-scrollbar-thumb': {
                                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                borderRadius: '4px'
                            }
                        }}
                        >
                            <Stack
                                direction="column"
                                justifyContent="space-between"
                                spacing={2}
                                sx={{
                                    boxShadow: 'none',
                                }}
                                item
                            >
                                {commentsList && commentsList.map((item, index) => (
                                    <CommentThread key={index} comment={item} />
                                ))}
                            </Stack>
                        </Box>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            item
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                width: '95%'
                            }}
                        >
                            <CreateComment />
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </>
    );
};

Page.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Page;
