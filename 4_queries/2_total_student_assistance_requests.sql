SELECT name, COUNT (assistance_requests.*) AS total_assistances
FROM assistance_requests
JOIN students ON students.id = student_id
WHERE name = 'Elliot Dickinson'
GROUP BY (name);