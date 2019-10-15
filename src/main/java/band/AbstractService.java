package band;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public abstract class AbstractService<ID_TYPE, MODEL extends AbstractModel<ID_TYPE>, REPOSITORY extends JpaRepository<MODEL, ID_TYPE>> {

    protected REPOSITORY repository;

    Logger log = LoggerFactory.getLogger(this.getClass().getSimpleName()); //getSimpleName returneaza numele clasei ,fara pachetul in care  e


    public AbstractService(REPOSITORY repository) {
        this.repository = repository;
    }


    public MODEL add(MODEL model) {
        log.info("Method get has been called with parameter {}", model);
        return repository.saveAndFlush(model);
    }

    public List<MODEL> getAll() {
        log.info("Method getAll has been called");
        return repository.findAll();
    }


    public Optional<MODEL> getById(ID_TYPE id) {
        log.info("Method getById has been called");

        return repository.findById(id);

    }


}
