import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 1rem;
    background-color: #fff;
    width: 100%;

    thead {
      background-color: #3a444b;

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
          background: #e7e9eb;
        }
        td {
          width: 100%;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      text-align: start;

      :last-child {
        border-right: 0;
      }
    }
  }
`;
