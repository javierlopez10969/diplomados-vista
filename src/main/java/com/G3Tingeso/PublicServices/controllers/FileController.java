package com.G3Tingeso.PublicServices.controllers;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.G3Tingeso.PublicServices.models.FileModel;
import com.G3Tingeso.PublicServices.models.FileResponse;
import com.G3Tingeso.PublicServices.services.FileService;

@RestController
@RequestMapping("files")
public class FileController {

    private final FileService fileService;

    @Autowired
    public FileController(FileService fileService) {
        this.fileService = fileService;
    }

    @PostMapping
    public ResponseEntity<String> upload(@RequestPart("file") MultipartFile file) {
        try {
            fileService.save(file);

            return ResponseEntity.status(HttpStatus.OK)
                                 .body(String.format("File uploaded successfully: %s", file.getOriginalFilename()));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body(String.format("Could not upload the file: %s!", file.getOriginalFilename()));
                                 
        }
    }

    @GetMapping
    public List<FileResponse> list() {
        return fileService.getAllFiles()
                          .stream()
                          .map(this::mapToFileResponse)
                          .collect(Collectors.toList());
    }

    private FileResponse mapToFileResponse(FileModel fileModel) {
        String downloadURL = ServletUriComponentsBuilder.fromCurrentContextPath()
                                                        .path("/files/")
                                                        .path(fileModel.getId())
                                                        .toUriString();
        FileResponse fileResponse = new FileResponse();
        fileResponse.setId(fileModel.getId());
        fileResponse.setName(fileModel.getName());
        fileResponse.setContentType(fileModel.getContentType());
        fileResponse.setSize(fileModel.getSize());
        fileResponse.setUrl(downloadURL);

        return fileResponse;
    }

    @GetMapping("{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable String id) {
        Optional<FileModel> fileModelOptional = fileService.getFile(id);

        if (!fileModelOptional.isPresent()) {
            return ResponseEntity.notFound()
                                 .build();
        }

        FileModel fileModel = fileModelOptional.get();
        return ResponseEntity.ok()
                             .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileModel.getName() + "\"")
                             .contentType(MediaType.valueOf(fileModel.getContentType()))
                             .body(fileModel.getData());
    }
}
