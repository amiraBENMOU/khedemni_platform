
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useGetCompaniesQuery } from '../../state/api/apiSlice';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease', // Add transition for smooth effect
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add initial shadow
  border: '1px solid #ddd', // Add border to make lines visible
  '&:hover': {
    cursor: 'pointer', // Change cursor to pointer on hover
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', // Add shadow on hover
  },
}));

export default function SelectActionCard() {
  const { data: companies, error, isLoading } = useGetCompaniesQuery();
  const [selectedCard, setSelectedCard] = useState(null);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading companies</p>;


  return (
    <>
     {companies && companies.length > 0 ? (
      companies.map((company, index) => (
        <Box sx={{ width: '100%',marginBottom:"2%" }} key={index}>
          <Stack spacing={1}>
            <Item>
              <Row>
                <Col lg={2} >
                  <p className="pt-3 text-start fw-bold " >
                  {company.companyName}
                  </p>
                </Col>
                <Col lg={2}>
                  <p className="mt-3 text-start" >
                    {company.email}
                  </p>
                </Col>
                <Col lg={2}>
                  <p className="mt-3 text-start" >
                 {company.phoneNumber}
                  </p>
                </Col>
                <Col lg={2}>
                  <p className="mt-3 text-start" >
                   {company.adresse}
                  </p>
                </Col>
                <Col lg={2}>
                  <p className="mt-3 text-start" >
                    <img src={company.image} alt={`${company.companyName} logo`} style={{ width: '50%', height: 'auto' }}  />
         
                  </p>
                </Col>
             </Row>
            </Item>
          </Stack>
        </Box>
        ))
       ) : (
        <p>No companies available</p>
         )}
      </>
    );
  }
