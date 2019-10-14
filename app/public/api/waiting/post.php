<?php
<<<<<<< HEAD
// Step 0 : Validate data
=======

// Step 0: Validate data

>>>>>>> 10-14-2019
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Prepare & run the query
<<<<<<< HEAD
$stmt = $db->prepare('
INSERT INTO PatientVisit
(patientGuid, visitDescription, priority)
VALUES (?,?,?)'
=======
$stmt = $db->prepare(
  'INSERT INTO PatientVisit
  (patientGuid, visitDescription, priority)
  VALUES (?,?,?)'
>>>>>>> 10-14-2019
);

$stmt->execute([
  $_POST['patientGuid'],
  $_POST['visitDescription'],
<<<<<<< HEAD
  $_POST['priority'],
=======
  $_POST['priority']
>>>>>>> 10-14-2019
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
<<<<<<< HEAD
header('Location: ../waiting/')
=======
header('Location: ../waiting/');
>>>>>>> 10-14-2019
