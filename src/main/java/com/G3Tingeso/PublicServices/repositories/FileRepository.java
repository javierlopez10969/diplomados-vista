package com.G3Tingeso.PublicServices.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.G3Tingeso.PublicServices.models.FileModel;

@Repository
public interface FileRepository extends JpaRepository<FileModel, String> {

}
