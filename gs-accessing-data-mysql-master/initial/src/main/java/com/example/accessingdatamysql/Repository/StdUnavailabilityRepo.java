package com.example.accessingdatamysql.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.accessingdatamysql.Model.StdUnavailability;

@Repository
public interface StdUnavailabilityRepo extends CrudRepository<StdUnavailability, Integer>{

}
