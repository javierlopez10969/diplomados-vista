package com.G3Tingeso.PublicServices.services;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.G3Tingeso.PublicServices.models.FileModel;
import com.G3Tingeso.PublicServices.repositories.FileRepository;

@Service
public class FileService {

    private final FileRepository fileRepository;

    @Autowired
    public FileService(FileRepository fileRepository) {
        this.fileRepository = fileRepository;
    }

    public void save(MultipartFile file) throws IOException {
        FileModel fileModel = new FileModel();
        fileModel.setName(StringUtils.cleanPath(file.getOriginalFilename()));
        fileModel.setContentType(file.getContentType());
        fileModel.setData(file.getBytes());
        fileModel.setSize(file.getSize());
        fileRepository.save(fileModel);
    }

    public Optional<FileModel> getFile(String id) {
        return fileRepository.findById(id);
    }

    public List<FileModel> getAllFiles() {
        return fileRepository.findAll();
    }
}