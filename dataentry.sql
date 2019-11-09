-- USER 

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


-- time
-- INSERT INTO TIME (TIME_VAL) VALUES ("08:00");
-- INSERT INTO TIME (TIME_VAL) VALUES ("08:30");
-- INSERT INTO TIME (TIME_VAL) VALUES ("09:00");
-- INSERT INTO TIME (TIME_VAL) VALUES ("09:30");
-- INSERT INTO TIME (TIME_VAL) VALUES ("10:00");
-- INSERT INTO TIME (TIME_VAL) VALUES ("10:30");
-- INSERT INTO TIME (TIME_VAL) VALUES ("11:00");
-- INSERT INTO TIME (TIME_VAL) VALUES ("11:30");
-- INSERT INTO TIME (TIME_VAL) VALUES ("12:00");
-- INSERT INTO TIME (TIME_VAL) VALUES ("12:30");
-- INSERT INTO TIME (TIME_VAL) VALUES ("13:00");
-- INSERT INTO TIME (TIME_VAL) VALUES ("13:30");
-- INSERT INTO TIME (TIME_VAL) VALUES ("14:00");
-- INSERT INTO TIME (TIME_VAL) VALUES ("14:30");
-- INSERT INTO TIME (TIME_VAL) VALUES ("15:00");
-- INSERT INTO TIME (TIME_VAL) VALUES ("15:30");
-- INSERT INTO TIME (TIME_VAL) VALUES ("16:00");
-- INSERT INTO TIME (TIME_VAL) VALUES ("16:30");
-- INSERT INTO TIME (TIME_VAL) VALUES ("17:00");
-- INSERT INTO TIME (TIME_VAL) VALUES ("17:30");
-- INSERT INTO TIME (TIME_VAL) VALUES ("18:00");
-- INSERT INTO TIME (TIME_VAL) VALUES ("18:30");
-- INSERT INTO TIME (TIME_VAL) VALUES ("19:00");
-- INSERT INTO TIME (TIME_VAL) VALUES ("19:30");
-- INSERT INTO TIME (TIME_VAL) VALUES ("20:00");
-- INSERT INTO TIME (TIME_VAL) VALUES ("20:30");
-- INSERT INTO TIME (TIME_VAL) VALUES ("21:00");
-- INSERT INTO TIME (TIME_VAL) VALUES ("21:30");

-- dlclass

-- INSERT INTO DLCLASSES
--     (DL_COURSE_ID ,
--     DL_START_TIME,
--     DL_END_TIME,
--     DL_CLASS_LOCATION,
--     DL_CLASS_DAY )
-- VALUES("Econ 302-2",
-- 4,
-- 7,
-- "JAC 111",
-- "Monday");
-- INSERT INTO DLCLASSES
--     (DL_COURSE_ID ,
--     DL_START_TIME,
--     DL_END_TIME,
--     DL_CLASS_LOCATION,
--     DL_CLASS_DAY )
-- VALUES("Econ 302-2",
-- 4,
-- 7,
-- "JAC 111",
-- "Wednesday");
-- INSERT INTO DLCLASSES
--     (DL_COURSE_ID ,
--     DL_START_TIME,
--     DL_END_TIME,
--     DL_CLASS_LOCATION,
--     DL_CLASS_DAY )
-- VALUES("Econ 302-2",
-- 4,
-- 7,
-- "JAC 111",
-- "Friday");
-- INSERT INTO DLCLASSES
--     (DL_COURSE_ID ,
--     DL_START_TIME,
--     DL_END_TIME,
--     DL_CLASS_LOCATION,
--     DL_CLASS_DAY )
-- VALUES("IMC 390",
-- 6,
-- 7,
-- "JAC 103",
-- "Monday");
-- INSERT INTO DLCLASSES
--     (DL_COURSE_ID ,
--     DL_START_TIME,
--     DL_END_TIME,
--     DL_CLASS_LOCATION,
--     DL_CLASS_DAY )
-- VALUES("MIS 307",
-- 15,
-- 18,
-- "Conner 11",
-- "Tuesday");
-- INSERT INTO DLCLASSES
--     (DL_COURSE_ID ,
--     DL_START_TIME,
--     DL_END_TIME,
--     DL_CLASS_LOCATION,
--     DL_CLASS_DAY )
-- VALUES("CJ 621",
-- 17,
-- 22,
-- "North 120",
-- "Thursday");
-- INSERT INTO DLCLASSES
--     (DL_COURSE_ID ,
--     DL_START_TIME,
--     DL_END_TIME,
--     DL_CLASS_LOCATION,
--     DL_CLASS_DAY )
-- VALUES("IMC 404",
-- 8,
-- 10,
-- "Guyton 210",
-- "Monday");
-- INSERT INTO DLCLASSES
--     (DL_COURSE_ID ,
--     DL_START_TIME,
--     DL_END_TIME,
--     DL_CLASS_LOCATION,
--     DL_CLASS_DAY )
-- VALUES("Math 540",
-- 15,
-- 18,
-- "JAC 111",
-- "Tuesday");
-- INSERT INTO DLCLASSES
--     (DL_COURSE_ID ,
--     DL_START_TIME,
--     DL_END_TIME,
--     DL_CLASS_LOCATION,
--     DL_CLASS_DAY )
-- VALUES("Econ 302-1",
-- 21,
-- 26,
-- "JAC A05",
-- "Thursday");


-- -- student schedule

INSERT INTO STUDENT_UNAVAILABILITY
    ( STD_USER_ID,
    STD_IS_CLASS ,
    STD_COURSEID,
    STD_START_TIME,
    STD_END_TIME,
    STD_DAY,
    STD_CLASS_LOCATION,
    IS_DL)
VALUES
    (10614325,
        1,
        "csci 1",
       13,
        15,
        "Monday",
        "Weir",
        0);
        
	INSERT INTO STUDENT_UNAVAILABILITY
    ( STD_USER_ID,
    STD_IS_CLASS ,
    STD_COURSEID,
    STD_START_TIME,
    STD_END_TIME,
    STD_DAY,
    STD_CLASS_LOCATION,
    IS_DL)
VALUES
    (10614325,
        1,
        "csci 1",
       13,
        15,
        "Wednesday",
        "Weir",
        0);
        
	INSERT INTO STUDENT_UNAVAILABILITY
    ( STD_USER_ID,
    STD_IS_CLASS ,
    STD_COURSEID,
    STD_START_TIME,
    STD_END_TIME,
    STD_DAY,
    STD_CLASS_LOCATION,
    IS_DL)
VALUES
    (10614325,
        1,
        "csci 1",
       13,
        15,
        "Friday",
        "Weir",
        0);

INSERT INTO STUDENT_UNAVAILABILITY
 ( STD_USER_ID,
    STD_IS_CLASS ,
    STD_COURSEID,
    STD_START_TIME,
    STD_END_TIME,
    STD_DAY,
    STD_CLASS_LOCATION,
    IS_DL)
VALUES
    (10614325,
        1,
        "csci 2",
        17,
        21,
        "Tuesday",
        "Weir",
        0);
        
        INSERT INTO STUDENT_UNAVAILABILITY
 ( STD_USER_ID,
    STD_IS_CLASS ,
    STD_COURSEID,
    STD_START_TIME,
    STD_END_TIME,
    STD_DAY,
    STD_CLASS_LOCATION,
    IS_DL)
VALUES
    (10614325,
        1,
        "csci 2",
        4,
        6,
        "Thursday",
        "Weir" ,
        0);

INSERT INTO STUDENT_UNAVAILABILITY
    ( STD_USER_ID,
    STD_IS_CLASS ,
    STD_COURSEID,
    STD_START_TIME,
    STD_END_TIME,
    STD_DAY,
    STD_CLASS_LOCATION,
    IS_DL)
VALUES
    (10614325,
        1,
        "mgmt 101",
        21,
        25,
        "Monday",
       "Holman" ,
       0);
INSERT INTO STUDENT_UNAVAILABILITY
    ( STD_USER_ID,
    STD_IS_CLASS ,
    STD_COURSEID,
    STD_START_TIME,
    STD_END_TIME,
    STD_DAY,
    STD_CLASS_LOCATION,
    IS_DL)
VALUES
    (10101026,
        0,
        null,
        1,
       5,
        "Thursday",
        null,
        0);

INSERT INTO STUDENT_UNAVAILABILITY
    ( STD_USER_ID,
    STD_IS_CLASS ,
    STD_COURSEID,
    STD_START_TIME,
    STD_END_TIME,
    STD_DAY,
    STD_CLASS_LOCATION,
    IS_DL)
VALUES
    (10101026,
        1,
        "Mgmt",
       17,
        19,
        "Tuesday",
        "Conner",
        0);
        
        INSERT INTO STUDENT_UNAVAILABILITY
    ( STD_USER_ID,
    STD_IS_CLASS ,
    STD_COURSEID,
    STD_START_TIME,
    STD_END_TIME,
    STD_DAY,
    STD_CLASS_LOCATION,
    IS_DL)
VALUES
    (10101026,
        1,
        "Mgmt",
       17,
        19,
        "Thursday",
        "Conner" ,
        0);

INSERT INTO STUDENT_UNAVAILABILITY
    ( STD_USER_ID,
    STD_IS_CLASS ,
    STD_COURSEID,
    STD_START_TIME,
    STD_END_TIME,
    STD_DAY,
    STD_CLASS_LOCATION,
    IS_DL)
VALUES
    (10101027,
        0,
        null,
        5,
        7,
        "Wednesday",
        null ,
        0);

INSERT INTO STUDENT_UNAVAILABILITY
    ( STD_USER_ID,
    STD_IS_CLASS ,
    STD_COURSEID,
    STD_START_TIME,
    STD_END_TIME,
    STD_DAY,
    STD_CLASS_LOCATION,
    IS_DL)
VALUES
    (10101027,
        1,
        "csci",
        1,
        5,
        "Tuesday",
     "JAC" ,
     0);
     
     INSERT INTO STUDENT_UNAVAILABILITY
    ( STD_USER_ID,
    STD_IS_CLASS ,
    STD_COURSEID,
    STD_START_TIME,
    STD_END_TIME,
    STD_DAY,
    STD_CLASS_LOCATION,
    IS_DL)
VALUES
    (10101027,
        1,
        "csci",
        1,
        5,
        "Thursday",
     "JAC",
     0);


INSERT INTO STUDENT_UNAVAILABILITY
    ( STD_USER_ID,
    STD_IS_CLASS ,
    STD_COURSEID,
    STD_START_TIME,
    STD_END_TIME,
    STD_DAY,
    STD_CLASS_LOCATION,
    IS_DL)
VALUES
    (10101028,
        0,
        null,
       19,
        21,
        "Friday",
        null,
        0);





