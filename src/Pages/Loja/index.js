import React from 'react';
import Contas from '../../Data/contas-mock.json'
import { Container, TableContainer, Table, Thead, Tr, Td, Th, Tbody, Center, Stack } from '@chakra-ui/react'

const data = Contas['Contas']
const dataHead = Object.keys(data[0])

function Loja() {
  return (
    <Container maxW='1200px' mt='10'>
      {console.log(dataHead)}
      <Stack>
        <Center>

          <TableContainer>
            <Table variant='simple'>
              <Thead>
              {dataHead.map((item, index) => (
                  <Tr key={index}>
                    <Th key={index}>{item}</Th>
                </Tr>
                ))}
              </Thead>
              <Tbody>
                {data.map((item, index) => (
                  <Tr key={index}>
                    <Td key={index}>{item.Cliente}</Td>
                    <Td>{item.Valor}</Td>
                    <Td>{item.juros}</Td>
                </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>

        </Center>
      </Stack>
    </Container>
  );
}

export default Loja;