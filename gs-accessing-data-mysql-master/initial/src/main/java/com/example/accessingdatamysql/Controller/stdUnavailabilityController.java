package com.example.accessingdatamysql.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.accessingdatamysql.Model.StdUnavailability;
import com.example.accessingdatamysql.Repository.StdUnavailabilityRepo;


@CrossOrigin(origins = "http://localhost:4200")

@RestController    // This means that this class is a Controller
@RequestMapping(path="/stdUnavailability")

public class stdUnavailabilityController {
	@Autowired
	private StdUnavailabilityRepo stdUnavailabilityRepo;
	
	@GetMapping(path="/all")
	public @ResponseBody Iterable<StdUnavailability> getAllstdUnavailability() {
		// This returns a JSON or XML with the users
		return stdUnavailabilityRepo.findAll();
	}

	 
//	    @PostMapping("/add")
	@RequestMapping(value = "/add", method = RequestMethod.POST)

	void addStdUnavailability(@RequestBody StdUnavailability stdUnavailability) {
	    	stdUnavailabilityRepo.save(stdUnavailability);
	    }
	
}
