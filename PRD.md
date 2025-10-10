# Ride With PH

### **🎯 Project Overview**

Design and build a **secure, scalable, and role-based backend API** for a **ride booking system** (like Uber, Pathao) using **Postgres** and **Prisma**.

Task is to implement a system where **riders** can request rides, **drivers** can accept and complete rides, and **admins** can manage the overall system.

Must implement:

- Authentication
- Role-based Authorization
- Rider & Driver Logic
- Ride Management Logic
- Modular Code Architecture
- Proper API Endpoints

---

### **Functional Requirements**

- JWT-based login system with three roles: `admin`, `rider`, `driver`
- Secure password hashing
- Riders should be able to:
  - Request a ride with pickup & destination location
  - Cancel a ride (within allowed window)
  - View ride history
- Drivers should be able to:
  - Accept/reject ride requests
  - Update ride status (Picked Up → In Transit → Completed)
  - View earnings history
  - Set availability status (Online/Offline)
- Admins should be able to:
  - View all users, drivers, and rides
  - Approve/suspend drivers
  - Block/unblock user accounts
- All rides must be **stored with complete history**
- Role-based route protection must be implemented

---

### **🚘 Ride Request & Fulfillment**

- How will ride requests be matched with available drivers?
  - Manual via driver action or auto-match?
- How will cancellation be handled?
  - Allowed only before driver accepts?
- What happens if no driver is available?
  - Waitlist or error response?
- How will pickup/destination locations be stored?
  - Coordinates (lat/lng)? Addresses?

---

### **🛠 Ride Lifecycle & Status**

- What statuses will a ride go through?
  - e.g., requested → accepted → picked_up → in_transit → completed
- Can a ride be canceled at any stage?
- Who can update which status?
  - Driver only? Admin?
- Will you log timestamps for each status?

---

### **👥 Role Representation**

- Will you use a single User model with role field?
- Will drivers have extra fields?
  - Approval status? Online status? Vehicle info?
- What is the minimum data required at registration?

---

### **🫵 Validations & Business Rules**

- Can a suspended driver accept rides?
- What if a driver is already on a ride?
- Can multiple rides be active for a single rider?
- Will there be maximum allowed cancel attempts?

---

### **📜 Access & Visibility**

- Can riders view all past rides?
- Can drivers see only completed rides or pending ones too?
- Can admins:
  - View all ride records?
  - Block riders/drivers?
  - Change ride statuses manually (optional)?

---

### **🔐 Role-Based Control**

- What endpoints are only for riders?
- What endpoints are only for drivers?
- What endpoints are shared or admin-only?
- How will you protect routes based on JWT + role?

---

### **🧩 API Design**

- Follow RESTful route conventions:
  - POST /rides/request, PATCH /rides/:id/status, GET /rides/me
  - PATCH /drivers/approve/:id, PATCH /users/block/:id
- Handle all common edge cases:
  - Ride conflicts, invalid requests, blocked users, etc.
- Use proper status codes and clear messages:
  - 200, 201, 400, 403, 404, etc.

---

### **🧠 Task**

- Will you implement:
  - **Driver ratings**?
  - **Rider feedback system**?
  - **Fare estimation logic**?
  - **Admin dashboard analytics?**
  - **Geo-based driver search?**

---

### **📁Project Structure**

Maintain a modular, production-ready architecture:

```
src/
├── modules/
│   ├── auth/
│   ├── user/
│   ├── driver/
│   ├── ride/
├── middlewares/
├── config/
├── utils/
├── app.ts
```
