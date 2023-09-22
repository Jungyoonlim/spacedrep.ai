import React from 'react';
import Layout from '../src/app/components/Layout';
import FlashcardApp from '../src/app/components/FlashcardApp';
import PaymentForm from '../src/app/components/PaymentForm';
import { Button, Card, LinearProgress, Typography } from '@material-ui/core';
import { InfoOutlined, StarBorder } from '@material-ui/icons';

const Dashboard = () => {
  return (
    <Layout>
      <div className="container mx-auto p-6">
        <Typography variant="h4" component="h1" gutterBottom>Welcome to Your Dashboard</Typography>

        {/* Flashcard Section */}
        <Card className="p-6 mb-6 transition-shadow hover:shadow-lg">
          <Typography variant="h5" component="h2" gutterBottom>Interactive Flashcards <InfoOutlined /></Typography>
          <Typography paragraph>Enhance your skills with our interactive flashcards. Track your progress below.</Typography>
          <FlashcardApp />
          <LinearProgress value={50} variant="determinate" className="mt-4" />
        </Card>

        {/* Upgrade Section */}
        <Card className="p-6 transition-shadow hover:shadow-lg">
          <Typography variant="h5" component="h2" gutterBottom>Go Premium <StarBorder /></Typography>
          <Typography paragraph>Unlock unlimited access to flashcards and advanced features. Upgrade today.</Typography>
          <PaymentForm />
          <Button variant="contained" color="primary" className="mt-4" disableElevation>Upgrade Now</Button>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;