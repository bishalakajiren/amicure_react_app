import React, { useEffect, useState } from 'react';
import { Table, Pagination, InputGroup, FormControl } from 'react-bootstrap';
import { getPatients } from '../services/openmrsService';

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchPatients = async () => {
      const patientsData = await getPatients(page, searchQuery);
      setPatients(patientsData);
    };

    fetchPatients();
  }, [page, searchQuery]);

  return (
    <div>
      <h1>Patient Records</h1>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search by name or ID"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </InputGroup>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Date of Registration</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.uuid}>
              <td>{patient.uuid}</td>
              <td>{patient.display}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.dateCreated}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        <Pagination.Prev onClick={() => setPage(page - 1)} disabled={page === 0} />
        <Pagination.Item active>{page + 1}</Pagination.Item>
        <Pagination.Next onClick={() => setPage(page + 1)} />
      </Pagination>
    </div>
  );
};

export default PatientList;