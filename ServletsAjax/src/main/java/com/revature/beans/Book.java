package com.revature.beans;

public class Book {

	String title;
	String desc;
	String author;
	int isbn;
	int pageCount;
	
	
	public Book() {
		super();
	}

	public Book(String title, String desc, String author, int isbn, int pageCount) {
		super();
		this.title = title;
		this.desc = desc;
		this.author = author;
		this.isbn = isbn;
		this.pageCount = pageCount;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getDesc() {
		return desc;
	}


	public void setDesc(String desc) {
		this.desc = desc;
	}


	public String getAuthor() {
		return author;
	}


	public void setAuthor(String author) {
		this.author = author;
	}


	public int getIsbn() {
		return isbn;
	}


	public void setIsbn(int isbn) {
		this.isbn = isbn;
	}


	public int getPageCount() {
		return pageCount;
	}


	public void setPageCount(int pageCount) {
		this.pageCount = pageCount;
	}
	

}
