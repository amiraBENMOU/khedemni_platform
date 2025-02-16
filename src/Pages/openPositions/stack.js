import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Container, Row, Col, Button } from 'react-bootstrap';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import WorkIcon from '@mui/icons-material/Work';
import BadgeIcon from '@mui/icons-material/Badge';
import PeopleIcon from '@mui/icons-material/People';

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

export default function BasicStack() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item>
          <Row>
            <Col lg={12} >
              <p className="pt-3 text-start fw-bold " >
                Devloppeur Full Stack
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={2}>
              <p className="mt-3 text-start" >
              <FmdGoodIcon/>  Algeria, Algiers
              </p>
            </Col>
            <Col lg={2}>
              <p className="mt-3 text-start" >
              <AccessTimeFilledIcon/>  Full Time
              </p>
            </Col>
            <Col lg={2}>
              <p className="mt-3 text-start" >
              <WorkIcon/>  Contabilite , Finance
              </p>
            </Col>
            <Col lg={2}>
              <p className="mt-3 text-start" >
              <BadgeIcon/>  CDI
              </p>
            </Col>
            <Col lg={2}>
              <p className="mt-3 text-start" >
              <PeopleIcon/>  2 people

              </p>
            </Col>
         </Row>
        </Item>
      </Stack>
    </Box>
  );
}