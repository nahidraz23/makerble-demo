import { Outlet } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useState } from "react";
import { GoSidebarCollapse } from "react-icons/go";

const MainLayout = () => {
    // const [toggled, setToggled] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    // console.log(toggled)

    return (
        <div className="grid grid-cols-12 p-4">
            <div className="col-span-3 md:col-span-2 min-h-[calc(100vh-32px)]">
                <Sidebar className="h-full" collapsed={collapsed}>
                    {/* <button className="btn btn-circle" onClick={() => setToggled(!toggled)}>Toggled</button> */}
                    <button className="btn btn-circle" onClick={() => setCollapsed(!collapsed)}><GoSidebarCollapse /></button>
                    <Menu>
                        <SubMenu label="Spaces">
                            <MenuItem> My Home</MenuItem>
                            <MenuItem> Projects </MenuItem>
                            <MenuItem> Make an Album </MenuItem>
                        </SubMenu>

                        <SubMenu label="Audience">
                            <MenuItem> Contacts</MenuItem>
                            <MenuItem> Signup Pages </MenuItem>
                            <MenuItem> Automations </MenuItem>
                            <MenuItem> Conversations </MenuItem>
                            <MenuItem> SMS Messaging </MenuItem>
                            <MenuItem> Email Messaging </MenuItem>
                            <MenuItem> Reports </MenuItem>
                        </SubMenu>

                        <SubMenu label="Activity">
                            <MenuItem> Events</MenuItem>
                            <MenuItem> Tasks</MenuItem>
                            <MenuItem> Cases </MenuItem>
                            <MenuItem> Alerts </MenuItem>
                            <MenuItem> Reports </MenuItem>
                        </SubMenu>

                        <SubMenu label="Serverys">
                            <MenuItem> Survey Campaigns</MenuItem>
                            <MenuItem> Servery Templates</MenuItem>
                            <MenuItem> Master Surverys</MenuItem>
                            <MenuItem> Survery Questions </MenuItem>
                            <MenuItem> Multi-project Analysis</MenuItem>
                            <MenuItem> Website Builder</MenuItem>
                        </SubMenu>

                        <SubMenu label="Impact">
                            <MenuItem> Progress Boards</MenuItem>
                            <MenuItem> Story Labels</MenuItem>
                            <MenuItem> Maps</MenuItem>
                            <MenuItem> Impact Store </MenuItem>
                            <MenuItem> Ideas</MenuItem>
                            <MenuItem> Collections</MenuItem>
                        </SubMenu>

                        <SubMenu label="Our Account">
                            <MenuItem> Billing</MenuItem>
                            <MenuItem> Organisations Settings</MenuItem>
                            <MenuItem> Enterprise Settings</MenuItem>
                            <MenuItem> Get Started</MenuItem>
                        </SubMenu>

                        <SubMenu label="Connections">
                            <MenuItem> Imports</MenuItem>
                            <MenuItem> API Access</MenuItem>
                        </SubMenu>

                        <SubMenu label="Me & Support">
                            <MenuItem> My Profile</MenuItem>
                            <MenuItem> Directory</MenuItem>
                            <MenuItem> Personal Settings</MenuItem>
                            <MenuItem> Chats</MenuItem>
                            <MenuItem> Downloads</MenuItem>
                            <MenuItem> Share a Discount</MenuItem>
                            <MenuItem> User Guide</MenuItem>
                            <MenuItem> Request Support</MenuItem>
                            <MenuItem> My Support Tickets</MenuItem>
                            <MenuItem> Makerble Apps</MenuItem>
                        </SubMenu>
                    </Menu>
                    <button className="btn flex justify-center w-full">Logout</button>
                </Sidebar>
            </div>
            <div className="col-span-9 md:col-span-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;