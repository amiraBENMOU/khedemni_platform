import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

const cards = [
  { title: 'Card 1', description: 'Description for card 1' },
  { title: 'Card 2', description: 'Description for card 2' },
  { title: 'Card 3', description: 'Description for card 3' },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div>
      {cards.map((card, index) => (
        <Card
          key={index}
          sx={{
            backgroundColor: 'white', // Default background color
            marginBottom: '20px',
            width:'80%',
            '&:hover': {
              backgroundColor: '#DEDEDE', // Background color on hover
            },
            '&[data-active]': {
              backgroundColor: '#DEDEDE', // Active card background color
            },
          }}
        >
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',width:'80%',
              '&[data-active]': {
                backgroundColor: '#ECECEC', // Active card background color
                '&:hover': {
                  backgroundColor: '#ECECEC', // Background color on hover when active
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}

export default SelectActionCard;