import React from 'react'
import AdminRoute from '../components/AdminRoute'
import PageLayout from '../components/PageLayout'

const AdminPage = () => {
  return (
    <AdminRoute>
      <PageLayout title="Panel Administracyjny" kanji="管">
        <div className="admin-panel">
          <h2>Zarządzanie serwerem</h2>
          <div className="admin-stats">
            <div className="stat-card">
              <h3>Zamówienia</h3>
              <p className="stat-number">0</p>
            </div>
            <div className="stat-card">
              <h3>Użytkownicy</h3>
              <p className="stat-number">0</p>
            </div>
            <div className="stat-card">
              <h3>Produkty</h3>
              <p className="stat-number">8</p>
            </div>
          </div>
        </div>
      </PageLayout>
    </AdminRoute>
  )
}

export default AdminPage