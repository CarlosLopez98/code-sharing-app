package com.carlos.notecode.persistence.crud;

import com.carlos.notecode.persistence.entity.CodeFile;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface CodeFileCrudRepository extends CrudRepository<CodeFile, UUID> {
}
