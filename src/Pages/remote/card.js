import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, Typography, Grid } from '@mui/material';
import { useGetCompaniesQuery } from '../../state/api/apiSlice';

function SelectActionCard() {
  const { data: companies, error, isLoading } = useGetCompaniesQuery();
  const [selectedCard, setSelectedCard] = useState(null);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {companies.map((company, index) => (
        <Card
          key={index}
          sx={{
            backgroundColor: 'white', // Default background color
            marginBottom: '20px',
            width: '80%',
            '&:hover': {
              backgroundColor: '#F2F4F7', // Background color on hover
            },
          }}
        >
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: '#F2F4F7', // Active card background color
                '&:hover': {
                  backgroundColor: '#F2F4F7', // Background color on hover when active
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%' }}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Typography variant="h5" component="div">
                    {company.companyName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {company.email}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {company.phoneNumber}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {company.adresse}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {company.webPage}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                <img src={company.image} alt={`${company.companyName} logo`} style={{ width: '50%', height: 'auto' }}  />
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}

export default SelectActionCard;