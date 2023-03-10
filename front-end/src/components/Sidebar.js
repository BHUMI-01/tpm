import React from 'react';
import {
  CDBBadge,
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: "100%", overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem
              icon="th-large"
            >
              <Link to="/stddash">Dashboard</Link>
            </CDBSidebarMenuItem>
            
            <CDBSidebarMenuItem
              icon="sticky-note"
            >
              <Link to="/">Change Password</Link>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem
              icon="sticky-note"
              suffix={
                <CDBBadge color="danger" size="small" borderType="pill">
                  new
                </CDBBadge>
              }
            >
              <Link to="/">Job Oportunity</Link>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem
              icon="sticky-note"
            >
              <Link to="/">Send Mail</Link>
            </CDBSidebarMenuItem>

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;