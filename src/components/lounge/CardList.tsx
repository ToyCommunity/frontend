import React from 'react'
import Card from './Card'
import { Container, Grid } from '@mui/material';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function CardList() {
  return (
    <div>
      <Container 
        maxWidth="lg"
      >
          <Grid 
            container 
            spacing={4}
          >
            {cards.map((card) => (
              <Grid 
                item 
                key={card} 
                sm={12} 
                md={6} 
                lg={4}
              >
                <Card />
              </Grid>
            ))}
          </Grid>
        </Container>
    </div>
  )
}

export default CardList
