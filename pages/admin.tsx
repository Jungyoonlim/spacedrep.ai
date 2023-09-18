import React, { useState, useEffect } from 'react';
import Layout from '../src/app/components/Layout';
import { query } from '../src/app/lib/db';
import { useSession } from 'next-auth/react';

type User = {
  id: number;
  email: string;
  // add other fields as necessary
};

type Flashcard = {
  id: number;
  question: string;
  // add other fields as necessary
};

const AdminPage = () => {
  const { data: session, status: loading } = useSession();
  const [users, setUsers] = useState<User[]>([]);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

  useEffect(() => {
    if (session) {
      getUsers();
      getFlashcards();
    }
  }, [session]);

  const getUsers = async () => {
    try {
      const results = await query('SELECT * FROM users', []);
      setUsers(results.rows);
    } catch (error) {
      console.error(error);
    }
  };

  const getFlashcards = async () => {
    try {
      const results = await query('SELECT * FROM flashcards', []);
      setFlashcards(results.rows);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return (
      <Layout>
        <h1>You must be logged in to view this page</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-6 py-3">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Admin Dashboard</h1>
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Users</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.email}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Flashcards</h2>
          <ul>
            {flashcards.map((flashcard) => (
              <li key={flashcard.id}>{flashcard.question}</li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default AdminPage;
