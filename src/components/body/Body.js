import React from 'react';
import Table from '../table/Table';
// import './body.css'
import { Container3, Boxs ,Buttons ,LI , ButtonsBtn , ButtonSpan , ContentTable , TableContent , PaginatedTable} from './Body.style';

function Body() {
    return (
        <Container3 >
            <Boxs>
                <Buttons >
                    <ButtonsBtn> <ButtonSpan>20</ButtonSpan> <br /> Need attention</ButtonsBtn>
                    <ButtonsBtn> <ButtonSpan>57</ButtonSpan> <br /> Active Projects</ButtonsBtn>
                    <ButtonsBtn> <ButtonSpan>4</ButtonSpan><br /> Up comming Projects</ButtonsBtn>
                    <ButtonsBtn> <ButtonSpan>4</ButtonSpan> <br /> Pending Aproval</ButtonsBtn>
                </Buttons>
                <Buttons>
                    <ButtonsBtn> <ButtonSpan>256</ButtonSpan> <br /> Completed projects</ButtonsBtn>
                </Buttons>

            </Boxs>
            <ContentTable>
                  <TableContent >
                       <ul>
                           <LI > Blockers (5) </LI>
                           <LI > Delayed (5)</LI>
                           <LI > Delays in Approval (5)</LI>
                           <LI > Timeline changes (5)</LI>
                           <LI > Blockers (5)</LI>
                       </ul>
                  </TableContent>
                  <PaginatedTable>
                      <Table />
                  </PaginatedTable>
            </ContentTable>
        </Container3>
    )
}

export default Body
