CREATE DATABASE TaskTrackerDB;

USE TaskTrackerDB;

CREATE TABLE NewTasks (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Title NVARCHAR(100) NOT NULL,
    Description NVARCHAR(255) NOT NULL,
    IsCompleted BIT NOT NULL DEFAULT 0,
    CreatedAt DATETIME DEFAULT GETDATE()
);


INSERT INTO Tasks (Title, Description, IsCompleted)
VALUES 
('Buy Groceries', 'Buy milk, bread, and eggs', 0),
('Submit Assignment', 'Submit final year project report', 1),
('Call John', 'Discuss task tracker progress', 0);

SELECT * FROM Tasks;

-- Mark task as completed
UPDATE Tasks SET IsCompleted = 1 WHERE Id = 1;

-- Delete a task
DELETE FROM Tasks WHERE Id = 3;

  EXEC sp_rename 'Tasks', 'NewTasks';
