import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
    font-size: 1rem;
    width: 100%;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  display: flex;
  
`;

WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 10px;
  background: var(--color-secondary);
  padding: 10px;
  box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.9);
  cursor: pointer;
  margin: 0 2px;
  
  
  &:focus {
    outline: none;
  }

  &:is-selected {
    border: 1px solid rgba(0, 0, 0, 0.3)
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`

  margin-left: 40px;

  &.is-selected {
    display: block;
  }

`;

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  flex-wrap: wrap;
`;
