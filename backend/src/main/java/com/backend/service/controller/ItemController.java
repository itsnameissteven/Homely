package com.backend.service.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.service.model.Item;
import com.backend.service.repository.ItemRepository;

@RestController
@RequestMapping("/items")
public class ItemController extends BaseController<Item, ItemRepository> {

}