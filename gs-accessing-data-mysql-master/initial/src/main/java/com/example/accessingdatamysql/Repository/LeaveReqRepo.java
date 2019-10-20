package com.example.accessingdatamysql.Repository;

import org.springframework.data.repository.CrudRepository;

import com.example.accessingdatamysql.Model.LeaveRequest;

public interface LeaveReqRepo extends CrudRepository<LeaveRequest, Integer>{

}
