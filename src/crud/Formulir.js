//rafce
import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const Formulir = () => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4>Tambah Data</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="nama">
              <Form.Label>Nama Makanan</Form.Label>
              <Form.Control type="text" name="nama"/>
            </Form.Group>

            <Form.Group controlId="deskripsi">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control as="textarea" rows={3} name="deskripsi" />
            </Form.Group>

            <Form.Group controlId="harga">
              <Form.Label>Harga</Form.Label>
              <Form.Control type="number" name="harga"/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;