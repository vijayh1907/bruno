import styled from 'styled-components';

const Wrapper = styled.div`
  color: ${(props) => props.theme.sidebar.color};

  aside {
    background-color: ${(props) => props.theme['sidebar-background']};

    .collection-title {
      line-height: 1.5;
      .collection-dropdown {
        .dropdown-icon {
          display: none;
          color: rgb(110 110 110);
        }
      }

      &:hover {
        background: #f7f7f7;
        .dropdown-icon {
          display: flex;
        }
      }

      div.tippy-box {
        position: relative;
        top: -0.625rem;
      }
    }

    .collection-filter {
      input {
        border: ${(props) => props.theme.sidebar.search.border};
        border-radius: 2px;
        background-color:  ${(props) => props.theme.sidebar.search.bg};

        &:focus {
          outline: none;
        }
      }
    }
  }

  div.drag-sidebar {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: col-resize;
    background-color: transparent;
    width: 6px;
    right: -3px;

    &:hover div.drag-request-border {
      width: 2px;
      height: 100%;
      border-left: solid 1px var(--color-request-dragbar-background-active);
    }
  }
`;

export default Wrapper;
