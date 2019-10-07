package dlscheduling.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
 
import dlscheduling.model.*;
 
public interface CustomerRepository extends CrudRepository<customer, Long> {
  List<customer> findByAge(int age);
}
