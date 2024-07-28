[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/UCQYxFhy)


# Assignment 6 REST API Documentation

This document outlines the usage and implementation details of a simple Node.js/Express REST API developed for Assignment 6.

## User Requirements

1. **Fetch all existing meetings using MeetingNotes Resource**
   - Endpoint: `GET /meetingnotes`
   - Fetches all existing meeting notes.

2. **Filter existing MeetingNotes using keywords in title, content, or action items, and MeetingNote between a create date range**
   - Endpoint: `GET /meetingnotes/filter`
   - Query Parameters:
     - `keyword`: Keywords to search in title, content, or action items.
     - `startdate`: Start date for filtering (optional).
     - `enddate`: End date for filtering (optional).
   - Filters meeting notes based on provided criteria.

3. **Add a MeetingNote using MeetingNotes Resource**
   - Endpoint: `POST /meetingnotes`
   - Request Body:
     - `title`: Title of the meeting note.
     - `content`: Content of the meeting note.
     - `actionItems`: Array of action items.
     - `createdDate`: Date of creation.
   - Adds a new meeting note.

4. **Update a MeetingNote including the action items using MeetingNotes Resource**
   - Endpoint: `PUT /meetingnotes/:id`
   - Path Parameter:
     - `id`: ID of the meeting note to update.
   - Request Body:
     - Fields to be updated, including action items.
   - Updates the specified meeting note.

5. **Delete a MeetingNote using MeetingNotes Resource**
   - Endpoint: `DELETE /meetingnotes/:id`
   - Path Parameter:
     - `id`: ID of the meeting note to delete.
   - Deletes the specified meeting note.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   cd <project-folder>
   npm install
   ```

3. Run the server:

   ```bash
   npm start
   ```

## API Usage

### Fetch all MeetingNotes

```http
GET /meetingnotes
```

### Filter MeetingNotes

```http
GET /meetingnotes/filter?keyword=<keyword>&startdate=<startdate>&enddate=<enddate>
```

### Add a MeetingNote

```http
POST /meetingnotes
Content-Type: application/json

{
  "title": "Weekly Team Meeting",
  "content": "Discuss project updates and upcoming deadlines.",
  "actionItems": [
    {
      "actionItemId": 1,
      "item": "Follow up with client regarding feedback",
      "pending_actions": true
    },
    {
      "actionItemId": 2,
      "item": "Prepare presentation for next meeting",
      "pending_actions": false
    }
  ],
  "createdDate": "2024-03-24T08:00:00Z"
}
```

### Update a MeetingNote

```http
PUT /meetingnotes/:id
Content-Type: application/json

{
  "title": "Updated Title",
  "content": "Updated content",
  "actionItems": [
    {
      "actionItemId": 1,
      "item": "Follow up with client regarding feedback",
      "pending_actions": true
    }
  ],
  "createdDate": "2024-03-25T08:00:00Z"
}
```

### Delete a MeetingNote

```http
DELETE /meetingnotes/:id
```

Replace `:id` with the ID of the meeting note to be deleted.

## Conclusion

This API provides CRUD operations for managing meeting notes as per the specified user requirements. For further details, refer to the API documentation and usage examples provided above.