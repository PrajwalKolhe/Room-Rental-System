import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AddProperties from './AddProperties'
import AdminDashboard from './Admin_Dashboard'
import Home from './HomePage'
import LandlordDashboard from './Lanlord_Dashboard'
import PropertyListAdmin from './PropertyList'
import TenantRegistration from './Tenant-Registration'
import TenantDashboard from './Tenant_Dashboard'
import UserLogin from './UserLogin'

const MainMenu = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/* default routing */}
                    <Route path="" element={<Home/>}/>
                    <Route path="/login" element={<UserLogin/>}/>
                    <Route path="/registerTenant" element={<TenantRegistration/>}/>
                    <Route path="/AddProperties" element={<AddProperties></AddProperties>}></Route>
                    <Route path="/AdminDashboard" element={<AdminDashboard></AdminDashboard>}></Route>
                    <Route path="/TenantDashboard" element={<TenantDashboard></TenantDashboard>}></Route>
                    <Route path="/LandlordDashboard" element={<LandlordDashboard></LandlordDashboard>}></Route>
                    <Route path="/PropertyListAdmin" element={<PropertyListAdmin></PropertyListAdmin>}></Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default MainMenu
