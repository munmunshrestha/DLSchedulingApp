package com.example.accessingdatamysql.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.accessingdatamysql.Model.LeaveRequest;
import com.example.accessingdatamysql.Repository.LeaveReqRepo;

	@CrossOrigin(origins = "http://localhost:4200")

	@RestController    // This means that this class is a Controller
	@RequestMapping(path="/LeaveReq")


public class LeaveReqController {
		@Autowired
		private LeaveReqRepo LeaveReqRepo;
		
		@GetMapping(path="/all")
		public @ResponseBody Iterable<LeaveRequest> getAllDLClass() {
			// This returns a JSON or XML with the users
			return LeaveReqRepo.findAll();
		}

		 
//		    @PostMapping("/add")
		@RequestMapping(value = "/add", method = RequestMethod.POST)

		void addDLClass(@RequestBody LeaveRequest LeaveReq) {
			LeaveReqRepo.save(LeaveReq);
		    }


}
