import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid #ddd;
    margin-bottom: 1rem;

    thead{
      background-color: #00be28;
      color: #fff;
    }
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    tr {
      margin-bottom: 1rem;
      padding: 10.5rem;
      :nth-child(even) {
        td {
          background: #E7E9EB;
        }
        td{
          width: 100%;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #E7E9EB;
      border-right: 1px solid #ddd;

      :last-child {
        border-right: 0;
      }
    }
  }
`;
