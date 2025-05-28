package com.backend.service.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.service.model.Item;
import com.backend.service.repository.ItemRepository;

@RestController
@RequestMapping("/tasks")
public class TaskController extends BaseController<Item, ItemRepository> {

}