-- -- USER
-- INSERT INTO USER
--     (USER_ID,FIRST_NAME,LAST_NAME,EMAIL,PASSWORD,IS_ADMIN)
-- VALUES
--     (10101025,
--         "Faye",
--         "Walter",
--         "wfwalter@olemiss.edu",
--         "Olemiss2019",
--         1);
-- INSERT INTO USER
--     (USER_ID,FIRST_NAME,LAST_NAME,EMAIL,PASSWORD,IS_ADMIN)
-- VALUES
--     (10101029,
--         "Meliah",
--         "Grant",
--         "mgrant@go.olemiss.edu",
--         "Olemiss2019",
--         0);
-- INSERT INTO USER
--     (USER_ID,FIRST_NAME,LAST_NAME,EMAIL,PASSWORD,IS_ADMIN)
-- VALUES
--     (10614325,
--         "Munmun",
--         "Shrestha",
--         "mshresth@go.olemiss.edu",
--         "Olemiss2019",
--         0);
-- INSERT INTO USER
--     (USER_ID,FIRST_NAME,LAST_NAME,EMAIL,PASSWORD,IS_ADMIN)
-- VALUES
--     (10101026,
--         "Anip Man",
--         "Joshi",
--         "ajoshi@go.olemiss.edu",
--         "Olemiss2019",
--         0);
-- INSERT INTO USER
--     (USER_ID,FIRST_NAME,LAST_NAME,EMAIL,PASSWORD,IS_ADMIN)
-- VALUES
--     (10101027,
--         "Joel",
--         "Jordan",
--         "jjordan@go.olemiss.edu",
--         "Olemiss2019",
--         0);
-- INSERT INTO USER
--     (USER_ID,FIRST_NAME,LAST_NAME,EMAIL,PASSWORD,IS_ADMIN)
-- VALUES
--     (10101028,
--         "Zakia",
--         "Zakia",
--         "zakia@olemiss.edu",
--         "Olemiss2019",
--         0);



-- -- dlclass

INSERT INTO DLCLASSES
    (DL_COURSE_ID ,
    DL_START_TIME,
    DL_END_TIME,
    DL_CLASS_LOCATION,
    DL_CLASS_DAY )
VALUES("Econ 302-2",
"09:30:00",
"10:45:00",
"JAC 111",
"[1,3,5]");

-- INSERT INTO DLCLASSES
--     (DL_COURSE_ID ,
--     DL_START_TIME,
--     DL_END_TIME,
--     DL_CLASS_LOCATION,
--     DL_CLASS_DAY )
-- VALUES("IMC 390",
-- "10:00:00",
-- "10:50:00",
-- "JAC 103",
-- "[1,3,5]");

INSERT INTO DLCLASSES
    (DL_COURSE_ID ,
    DL_START_TIME,
    DL_END_TIME,
    DL_CLASS_LOCATION,
    DL_CLASS_DAY )
VALUES("MIS 307",
"15:00:00",
"16:15:00",
"Conner 11",
"[1,3,5]");

-- INSERT INTO DLCLASSES
--     (DL_COURSE_ID ,
--     DL_START_TIME,
--     DL_END_TIME,
--     DL_CLASS_LOCATION,
--     DL_CLASS_DAY )
-- VALUES("CJ 621",
-- "16:00:00",
-- "18:30:00",
-- "North 120",
-- "[1,3,5]");

INSERT INTO DLCLASSES
    (DL_COURSE_ID ,
    DL_START_TIME,
    DL_END_TIME,
    DL_CLASS_LOCATION,
    DL_CLASS_DAY )
VALUES("IMC 404",
"11:00:00",
"12:15:00",
"Guyton 210",
"[2,4]");

INSERT INTO DLCLASSES
    (DL_COURSE_ID ,
    DL_START_TIME,
    DL_END_TIME,
    DL_CLASS_LOCATION,
    DL_CLASS_DAY )
VALUES("Math 540",
"15:00:00",
"16:15:00",
"JAC 111",
"[2,4]");

INSERT INTO DLCLASSES
    (DL_COURSE_ID ,
    DL_START_TIME,
    DL_END_TIME,
    DL_CLASS_LOCATION,
    DL_CLASS_DAY )
VALUES("Econ 302-1",
"18:00:00",
"20:30:00",
"JAC A05",
"[2,4]");


-- -- student schedule

-- INSERT INTO STUDENT_UNAVAILABILITY
--     ( STD_USER_ID,
--     STD_IS_CLASS ,
--     STD_COURSEID,
--     STD_START_TIME,
--     STD_END_TIME,
--     STD_DAY,
--     STD_CLASS_LOCATION)
-- VALUES
--     (10614325,
--         1,
--         "csci 1",
--         "14:00:00",
--         "14:50:00",
--         "[1,3,5]",
--         "Weir" );

-- INSERT INTO STUDENT_UNAVAILABILITY
--     ( STD_USER_ID,
--     STD_IS_CLASS ,
--     STD_COURSEID,
--     STD_START_TIME,
--     STD_END_TIME,
--     STD_DAY,
--     STD_CLASS_LOCATION)
-- VALUES
--     (10614325,
--         1,
--         "csci 2",
--         "16:00:00",
--         "17:50:00",
--         "[1,3,5]",
--         "Weir" );

-- INSERT INTO STUDENT_UNAVAILABILITY
--     ( STD_USER_ID,
--     STD_IS_CLASS ,
--     STD_COURSEID,
--     STD_START_TIME,
--     STD_END_TIME,
--     STD_DAY,
--     STD_CLASS_LOCATION)
-- VALUES
--     (10614325,
--         1,
--         "mgmt 101",
--         "18:00:00",
--         "20:00:00",
--         "[2]",
--         "Holman" );
-- INSERT INTO STUDENT_UNAVAILABILITY
--     ( STD_USER_ID,
--     STD_IS_CLASS ,
--     STD_COURSEID,
--     STD_START_TIME,
--     STD_END_TIME,
--     STD_DAY,
--     STD_CLASS_LOCATION)
-- VALUES
--     (10614325,
--         0,
--         null,
--         "8:00:00",
--         "10:00:00",
--         "[2,4]",
--         null );

-- INSERT INTO STUDENT_UNAVAILABILITY
--     ( STD_USER_ID,
--     STD_IS_CLASS ,
--     STD_COURSEID,
--     STD_START_TIME,
--     STD_END_TIME,
--     STD_DAY,
--     STD_CLASS_LOCATION)
-- VALUES
--     (10101026,
--         1,
--         "Mgmt",
--         "16:00:00",
--         "17:00:00",
--         "[2,5]",
--         "Conner" );

-- INSERT INTO STUDENT_UNAVAILABILITY
--     ( STD_USER_ID,
--     STD_IS_CLASS ,
--     STD_COURSEID,
--     STD_START_TIME,
--     STD_END_TIME,
--     STD_DAY,
--     STD_CLASS_LOCATION)
-- VALUES
--     (10101027,
--         0,
--         null,
--         "10:00:00",
--         "10:50:00",
--         "[3]",
--         null );

-- INSERT INTO STUDENT_UNAVAILABILITY
--     ( STD_USER_ID,
--     STD_IS_CLASS ,
--     STD_COURSEID,
--     STD_START_TIME,
--     STD_END_TIME,
--     STD_DAY,
--     STD_CLASS_LOCATION)
-- VALUES
--     (10101027,
--         1,
--         "csci",
--         "08:00:00",
--         "10:00:00",
--         "[2,4]",
--         "JAC" );

-- INSERT INTO STUDENT_UNAVAILABILITY
--     ( STD_USER_ID,
--     STD_IS_CLASS ,
--     STD_COURSEID,
--     STD_START_TIME,
--     STD_END_TIME,
--     STD_DAY,
--     STD_CLASS_LOCATION)
-- VALUES
--     (10101028,
--         0,
--         null,
--         "17:00:00",
--         "18:00:00",
--         "[1,5]",
--         null );

--         INSERT INTO STUDENT_UNAVAILABILITY
--     ( STD_USER_ID,
--     STD_IS_CLASS ,
--     STD_COURSEID,
--     STD_START_TIME,
--     STD_END_TIME,
--     STD_DAY,
--     STD_CLASS_LOCATION)
-- VALUES
--     (10101029,
--         0,
--         null,
--         "09:00:00",
--         "10:00:00",
--         "[1,3,5]",
--         null );