import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMusic, addMusic, editMusic } from '../src/musicSlice';
import { Container, Title, Table, Button } from './style';
import Insert from '../src/Create/Insert';

function Home() {
  const dispatch = useDispatch();
  const musicSlice = useSelector((state) => state.music) || { items: [], status: 'loading' };
  const { items: myMusic, status } = musicSlice;
  
  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    dispatch(fetchMusic());
  }, [dispatch]);

  const handleAddOrEditSubmit = async (musicData, id) => {
    try {
      if (id) {
        await dispatch(editMusic({ ...musicData, id })).unwrap();
      } else {
        await dispatch(addMusic(musicData)).unwrap();
      }
      setShowForm(false);
      setEditData(null); 
      dispatch(fetchMusic()); 
    } catch (error) {
      console.error('Failed to add or edit the music entry: ', error);
    }
  };

  const handleEdit = (musicData) => {
    setEditData(musicData);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    console.log('Delete functionality to be implemented', id);
  };

  return (
    <Container>
      <Title>Music List</Title>
      <Button onClick={() => { setShowForm(true); setEditData(null); }}>Add Music</Button>
      {showForm && <Insert onClose={() => setShowForm(false)} onSubmit={handleAddOrEditSubmit} data={editData} />}
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Singer</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myMusic.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.singer}</td>
                <td>{item.year}</td>
                <td>
                  <Button onClick={() => handleEdit(item)} style={{ marginRight: '10px' }}>Edit</Button>
                  <Button onClick={() => handleDelete(item.id)} style={{ backgroundColor: 'red', color: 'white' }}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default Home;
