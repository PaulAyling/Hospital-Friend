THIS IS TAKEN AND REDUCED FROM THE amazonKindlePublishingGuide.pdf published by Amazon

PART OF THE DOCUMENTS BELOW
Part II. General Best Practices 
4 Cover Image Guidelines 
 
Kindle books must have a marketing cover image provided for use on the website detail page. This is provided separately from the eBook file. The preferred format for the marketing cover is an image of at least 2560 pixels on the longest side and at least 1600 pixels on the shortest side with 300 ppi to ensure image clarity on Kindle HDX devices. The image file size should be 50MB or smaller.  
If the marketing cover image size is smaller than the 2560 x 1600 recommendation, a reminder message is displayed at time of upload. Covers with less than 500 pixels on the shortest side are not displayed on the website.  
If your cover image is smaller than the recommended size, Amazon strongly recommends that you create a new image that meets the size requirements. Do not stretch the image to meet the size requirements, because this may lower the image quality. 
The content of the cover image must not: 
•	Infringe another publisher’s or artist’s copyright on the same cover. 
•	Mention pricing or other temporary promotional offers. 
Important: Use RGB as the color profile when saving your cover image files. Kindle does not support CMYK. 
Note: This cover image guidance doesn’t apply to KDP eBooks. If using KDP, follow the KDP guidelines for cover images. 
  Internal Content Cover Image Is Mandatory 
Kindle books must have an internal cover image provided for use within the book content. Provide a large, high-resolution cover, because Amazon quality assurance will fail the book if the cover is too small.  
Do not add an HTML cover page to the content in addition to the cover image. This may result in the cover appearing twice in the book or cause the book to fail conversion. 
Define covers in the OPF file using either of the following methods (underlined elements are mandatory): 
Method 1 (preferred): 
<manifest> ... 
<item id="cimage" media-type="image/jpeg" href="other_cover.jpg" properties="coverimage"/> ... 
</manifest> 
This syntax is part of IDPF 3.0 standard and described at http://idpf.org/epub/30/spec/epub30publications-20111011.html#sec-item-property-values. 
Method 2: 
<metadata> ... 
<meta name="cover" content="my-cover-image" />  ... 
</metadata> ... 
<manifest> ... 
<item href="MyCoverImage.jpg" id="my-cover-image" media-type="image/jpeg" /> ... 
</manifest> 
This syntax is not part of the IDPF standard. However, it was designed with help from the IDPF and will validate in an IDPF validator. 
Note: This cover image guidance doesn’t apply to KDP eBooks. If you’re using KDP, follow the KDP guidelines for cover images. 
5 Navigation Guidelines  
 
Amazon strongly recommends the use of an HTML table of contents (TOC) for all books that would benefit from this navigation feature. This applies to most books, but is optional for most fixed-layout children's books (see section 11) and fixed-layout graphic novels/manga/comics (see section 12). 
Amazon requires that all Kindle books include a logical TOC. The logical TOC is very important for a good reading experience, because it allows a reader to navigate between chapters easily. Users expect to see an HTML TOC when paging through a book from the beginning, while the logical TOC is an additional way for users to navigate books. The inclusion of a logical TOC is especially important for books that are longer than 20 pages. 
For additional guidelines on audio/video navigation see section 14.4. 
  HTML TOC Guidelines 
Place the HTML TOC towards the beginning of the book and not at the end of the book. This ensures that a customer paging through the book from the beginning encounters the TOC naturally. Incorrect placement of the TOC affects the accuracy of the “Last Page Read” feature. Correct placement ensures that the TOC appears in sample downloads of the book. 
HTML TOC Best Practices: 
•	The entries in the TOC must be HTML links so that users can click to go to a specific location. A table of contents that is not made of links is not useful on Kindle. 
•	Do not create a TOC using HTML <table> tags. Tables are for tabular data only, not for layout. 
•	Do not use page numbers in the TOC. Kindle books do not always map directly to page numbers in physical editions of the book. 
•	If you are importing the document from Word, use the “Heading” styles and the "Table of Contents" feature of Microsoft Word. The TOC created by Word will be imported correctly and will convert to a TOC that follows these guidelines.  
•	For bundled editions containing more than one individual book, include an overarching TOC at the beginning of the file.  
•	If your TOC includes a List of Maps or Illustrations, provide an HTML link to each map or illustration. 
5.1.1 Using a Nested HTML TOC 
To create useful and navigable nested TOC entries, Amazon recommends using the following syntax in the HTML TOC. The examples below show two ways of writing the same sample code: style attributes and CSS classes.  
Using style attributes: 
<div>Section 1</div> 
<div style="margin-left:2%;">Chapter 1</div> 
<div style="margin-left:2%;">Chapter 2</div> 
<div style="margin-left:2%;">Chapter 3</div> 
<div style="margin-left:4%;">Subchapter 1</div> 
<div style="margin-left:4%;">Subchapter 2</div> 
<div style="margin-left:2%;">Chapter 4</div> 
<div style="margin-left:4%;">Subchapter 1</div> 
<div>Section 2</div> ... 
Using CSS classes: 
<style> div.chapter { margin-left: 1em} div.subchapter { margin-left: 2em} 
</style> 
 
<div>Section 1</div> 
<div class="chapter">Chapter 1</div> 
<div class="chapter">Chapter 2</div> 
<div class="chapter">Chapter 3</div> 
<div class="subchapter">Subchapter 1</div> 
<div class="subchapter">Subchapter 2</div> 
<div class="chapter">Chapter 4</div> 
<div class="subchapter">Subchapter 1</div> 
<div>Section 2</div> ... 
  NCX Guidelines 
Logical TOCs are generated using toc nav elements or a navigational control file for XML application (NCX). Creating a logical TOC exposes the hierarchical structure of a Kindle book and allows the user to navigate through it using the Kindle menu. The inclusion of a logical TOC is especially important for books that are longer than 20 pages.  
In logical TOC-enabled books, users can see where they are in the book because the part, chapter, or section is exposed. This progress indicator also shows relative progress through the book. 
For guidance on creating a logical TOC using a toc nav element, see section 5.2.1. 
For guidance on creating a logical TOC using NCX, see section 5.2.2. 
Important: Kindle devices and applications support two levels of nesting. 
5.2.1 Creating a Logical TOC Using a toc nav Element 
The toc nav element is part of the IDPF 3.0 specification and is described at http://idpf.org/epub/30/spec/epub30-contentdocs-20111011.html#sec-xhtml-nav-def-model and http://idpf.org/epub/30/spec/epub30-contentdocs-20111011.html#sec-xhtml-nav-def-types-toc. 
Creating a toc nav element provides both a logical TOC and an HTML TOC. The toc nav element should be a separate HTML document from the HTML TOC.  
 
Example: 
<nav epub:type="toc"> 
<ol> 
<li><a href="Sway_body.html#preface_1">AUTHOR'S NOTE</a></li> 
<li><a href="Sway_body.html#part_1">PART ONE</a> 
  <ol> 
  <li><a href="Sway_body.html#chapter_1">THE HOUSES, 1969</a></li> 
  <li><a href="Sway_body.html#chapter_2">ROCK AND ROLL, 1962</a></li> 
  <li><a href="Sway_body.html#chapter_3">THE EMPRESS, 1928–1947</a></li> 
  </ol> 
</li> 
</ol> 
</nav> 
The example above defines the following TOC hierarchy: 
AUTHOR'S NOTE 
PART ONE 
 	THE HOUSES, 1969 
 	ROCK AND ROLL, 1962 
 	THE EMPRESS, 1928–1947 
This excerpt from the OPF (publication header file) shows how to declare the toc nav element in the <manifest>: 
Example: 
<manifest>  
<item id="toc" properties="nav" href="xhtml/toc.xhtml" mediatype="application/xhtml+xml"/> 
Using it in the <spine> is optional if it will be used as the HTML TOC. 
Example: 
<spine> 
<itemref idref="toc"/> 
5.2.2 Creating a Logical TOC Using NCX 
NCX is part of the IDPF 2.0 specification and is described at http://www.idpf.org/epub/20/spec/OPF_2.0_latest.htm#Section2.4.1. 
NCX Example: 
<navMap>  
<navPoint class="titlepage" id="L1T" playOrder="1">  
<navLabel><text>AUTHOR'S NOTE</text></navLabel>  
<content src="Sway_body.html#preface_1" />  
</navPoint>  
<navPoint class="book" id="level1-book1" playOrder="2">  
<navLabel><text>PART ONE</text></navLabel>  
<content src="Sway_body.html#part_1" />  
<navPoint class="chapter" id="level2-book1chap01" playOrder="3">  
<navLabel><text>THE HOUSES, 1969</text></navLabel>  
<content src="Sway_body.html#chapter_1" />  
</navPoint>  
<navPoint class="chapter" id="level2-book1chap02" playOrder="4">  
<navLabel><text>ROCK AND ROLL, 1962</text></navLabel>  
<content src="Sway_body.html#chapter_2" />  
</navPoint>  
<navPoint class="chapter" id="level2-book1chap03" playOrder="5">  
<navLabel><text>THE EMPRESS, 1928–1947</text></navLabel>  
<content src="Sway_body.html#chapter_3" />  
</navPoint>  
</navPoint>  
</navMap>  
The NCX example above defines the following TOC hierarchy: 
AUTHOR'S NOTE 
PART ONE 
 	THE HOUSES, 1969 
 	ROCK AND ROLL, 1962 
 	THE EMPRESS, 1928–1947 
Amazon requires that the NCX elements follow the same order as the book. (For example, the link for Chapter 2 should not precede the link for Chapter 1.) This excerpt from the OPF (publication header file) shows how to add an NCX table of contents to a book. 
Declare the NCX in the <manifest>: 
<manifest>    
<item id="toc" media-type="application/x-dtbncx+xml"   	href="toc.ncx"/> 
And reference it in the <spine>: 
<spine toc="toc"> 
  Guide Items 
Guide items are an optional feature in the EPUB format but are highly recommended. Kindle provides support for the cover, TOC, and start reading location (”Go to Beginning”) guide items. You can define guide items for the cover and TOC as described in section 5.3.1. The start reading location is defined by Amazon. If you choose not to include guide items for the cover and TOC, these list items will still appear in the Kindle menus, but will be grayed out and not selectable. 
5.3.1 Defining Cover and TOC 
The Kindle platform supports both landmarks nav elements and guide items for defining the cover and table of contents (TOC). These elements serve to supplement the TOC and should not be used in place of one. 
The landmarks nav elements are part of the IDPF 3.0 specification and are described at: http://idpf.org/epub/30/spec/epub30-contentdocs-20111011.html#sec-xhtml-nav-def-model and http://idpf.org/epub/30/spec/epub30-contentdocs-20111011.html#sec-xhtml-nav-def-types-landmarks. 
Here is an example of a guide item for a TOC (underlined elements are mandatory): 
<guide> <reference type="toc" title="Table of Contents" href="toc.html"/> </guide> 

Here is an example of a landmarks nav element for a TOC (underlined elements are mandatory): 
<nav epub:type="landmarks"> 
<ol><li><a epub:type="toc" href="toc.html">Table of Contents</a></li></ol> </nav> 

6 HTML and CSS Guidelines 
 
For a list of supported HTML elements, see section 18.1. For a list of supported CSS elements, see section 18.2. For a list of attributes and tags supported by Enhanced Typesetting, see section 17. 
  Constructing Well-Formed HTML Documents (XHTML) 
Kindle Format 8 supports most HTML 5.0 features, although the following HTML features are not fully supported: forms, frames, and JavaScript.  
When creating source HTML or XHTML for the Kindle, refer to one of the following resources as a primer on constructing well-formed HTML documents: 
•	International Digital Publishing Forum (IDPF) EPUB Standards: http://idpf.org/epub 
•	World Wide Web Consortium (W3C) Standards: https://www.w3.org/standards/ 
•	World Wide Web Consortium (W3C) HTML and CSS Guidelines: 
https://www.w3.org/standards/webdesign/htmlcss 
To ensure your HTML or XHTML documents are well formatted for accessibility, we recommend they adhere to the following document accessibility standards:  
•	The W3C Web Content Accessibility Guidelines 
•	The International Digital Publishing Forum’s EPUB 3 Accessibility Standards 
 
  Avoid Using Negative Values 
Avoid using negative values for positioning text and margins. Positioning with negative values without adding padding for compensation can cause content to display with the edge cut off. For example, if you want to use text-indent: -2em you also need to apply padding-left: 2em. 
Do not use negative values for the line-height attribute. They aren’t supported. 
  Avoid Using Scripting 
Scripting is not supported. All scripts are stripped from the source during conversion.  
  Avoid Nested <p> Tags 
In compliance with W3C standards, avoid nested <p> tags. Files with nested <p> tags do not convert properly. 
  File References Must Match Case and Spelling of Source 
Per W3C HTML standards, all file references (fonts, images, etc.) must match the case and spelling of the name of the source file exactly. (Example: “audiovideo/ThisFile.mp4” is different from “audiovideo/Thisfile.mp4”.)  
To indicate a file in a directory, use “/” characters and not “\” characters. (Example: 
“multimedia/ThisFile.mp4” is valid, but “multimedia\ThisFile.mp4” is not.) 
  Other Encodings Are Supported 
The source of a Kindle book can be encoded in many different ways. All encodings are supported, provided that: 
•	The encoding of the HTML files is clearly stated in the HTML. 
•	The computer used for compiling the sources supports the encoding and knows how to convert it to Unicode. 
Amazon recommends specifying the encoding of the HTML by using the <meta> tag in the <head> section or an XML declaration. 
Method 1: 
<html> 
<head> 
… 
<meta http-equiv="content-type" content="text/html; charset=UTF-8"> 
… 
Method 2: 
<?xml version="1.0" encoding="UTF-8"?>  
  Use Supported Characters and Spaces 
Characters should be represented using plain text UTF-8 characters, except where XML entities are strictly required or are easier for humans to read than their character equivalents. For example, instead of using the "&copy;" entity, use the © character. 
XML entities are strictly required for "<" (&lt;), ">" (&gt;), and "&" (&amp;). 
The only supported spaces are the normal space, the non-breaking space (&nbsp;), and the zero-width non-joiner (&zwnj;). Use of any other space can break the selection, dictionary lookup, and line-wrap algorithms. 
Do NOT use Unicode format characters, as they may cause problems. 
  Design for a Good eBook Experience 
Kindle supports float via CSS, but this does not guarantee that the floating of text and images will produce an exact replica of the print layout on all Kindle devices and applications. If float is not producing the desired result, Amazon recommends rethinking the design and layout to create the best possible eBook experience rather than fixating on duplicating the print experience on a device. Using fixed-layout format just to replicate print layout is not allowed in Kindle books because customers report this as a bad user experience. 
7 Hyperlink Guidelines 
 
Internal links can be used to link separate content within the book. Some examples of this include: 
•	Links from the book-level table of contents to each individual chapter (see sections 5.1 and 5.1.1) 
•	Links from a chapter-level table of contents to subchapters or chapter sections 
•	Links to an appendix or glossary 
•	Footnotes (see section 10.3.11) 
Amazon requires formatting footnotes with bi-directional hyperlinks (the text is linked to the footnote and the footnote is linked back to the text). This makes it easier for customers to return to the text after viewing the footnote. On some devices, the footnote is displayed in a pop-up window. 
To avoid unintended footnote pop-ups, internal links that are not footnotes should not be formatted with bi-directional hyperlinks (A links to B and B links to A). Non-footnote links should use the format A links to B and B links to C instead. For example, links from a chapter-level table of contents to a chapter section should link back to the chapter heading. 
 
Internal hyperlinks are not currently supported on E-reader devices in fixed-layout books. 
  External Link Guidelines 
External links within Kindle books should be present only if they directly enhance the reader experience and the content of the title as determined by Amazon. Some examples of this include:  
•	Links to previous or subsequent books in a series 
•	Links to multimedia content directly related the content of title 
•	Links to additional ancillary material (e.g., checklists, assessment forms, craft patterns, and similar printable materials) 
•	Links to topical websites (e.g., link to Whitehouse.gov in a Kindle book about the American government)  
•	Social media related to the book or author (e.g., Twitter hashtag)  
To ensure future access to reference material, Amazon strongly recommends submitting these types of links to an archive service and including the archived link in the eBook. 
• 	Options for presenting archival links include following the main link as “webpage archive” or “archived web content". Archival links can also be provided in a footnote or endnote. 
To ensure that links are understandable to all readers, include a self-describing link title in addition to the URL. Self-describing link titles provide the reader with specific context of what the link will open. Avoid phrases such as "click here," "see more," or "additional details." Also avoid repetitive links within the same page of content. 
Some examples of prohibited links include:  
•	Links to pornography 
•	Links to commercial eBook store sites other than Amazon  
•	Links to web forms that request customer information (e.g., email address, physical address or similar)  
•	Links to illegal, harmful, infringing, or offensive content 
•	Links that are malicious in intent (e.g., virus, phishing, or similar)  
External hyperlinks are not currently supported on E-reader devices in fixed-layout books. Amazon reserves the right to remove links in its sole discretion.  
Deactivate external hyperlinks that are broken due to forces outside of your control and add text such as “(URL inactive)” after the link text.. 
8 Accessibility Guidelines 
 
To ensure that your book is accessible to all readers, including those who are blind, have moderate to severe vision impairments, or have reading disabilities such as dyslexia, Amazon recommends the following best practices:  
1.	Define the primary language of the book and any language changes within the content. 
2.	Create well-structured content (see section 6.1)  using HTML, EPUB, or .doc(x) formats (Note: .doc(x) is for KDP only): 
a.	Use hierarchical headings to organize chapters, sections, and subsections. 
b.	Use ordered and unordered lists to group items and provide structure. 
c.	Include captions, row headings, and column headings for all tables (see section10.5). Avoid using an image of a table.  
3.	Ensure all meaningful images have text alternatives or are described by the surrounding text. Set the alt attribute of decorative images to null and avoid using images of text. 
4.	Add self-describing titles to all links and avoid the use of repetitive links on the same page. 
5.	Ensure text has sufficient contrast with the background colors (see section 10.3.2). Avoid using thin, light-colored fonts. 
6.	Consider the reading order of content elements in fixed-format books. 
7.	Use MathML markup to present mathematical content or other equations (see section 10.6). 
9 QA Standards 
 
Amazon strongly recommends that you verify your exported content before converting it into a Kindle book because some content creation tools format content differently when exporting to HTML. 
In addition, Amazon encourages you to review the entire book for:  
•	Missing content 
•	Wrong content 
•	Typos and complete character support 
•	Alignment errors  
•	Forced typeface throughout the entire book (reflowable only) or correct font (fixed-layout)  
•	Image quality 
•	Proper paragraph spacing and indenting 
•	Forced font color or background color (reflowable only) • 	Content accessibility errors, including:  
o	Missing or improperly nested headings o 	Improperly described links o 	Insufficient contrast between text and background colors (WCAG standards recommends a minimum contrast ratio of 4.5:1) 
o	Improperly structured data tables (see section 10.5.2, Create Simple HTML Tables, for details) 
o	Images missing text alternatives (see section 10.4.1, Use Supported Input Formats, for details) 
These errors negatively affect readability and may require the Amazon team to suppress the title to protect the reader’s experience.  
  Testing Kindle Books 
There are three ways to test your Kindle book before adding it to the Kindle store: 
1.	Use Kindle Previewer 3. Publishers and self-publishers can test eBooks using Kindle Previewer 3, available for both Windows and Mac OS X. Kindle Previewer is a great way to test your eBooks for formatting issues, and preview how they will appear on the latest Kindle devices and applications. The most recent version of Kindle Previewer can be downloaded for free from www.amazon.com/kindleformat/kindlepreviewer. 
	• 	Note: Older versions of Kindle Previewer do not support Enhanced Typesetting. 
2.	Use KDP. For self-publishers, the Kindle Direct Publishing Platform accepts a variety of book formats and provides preview capability on the website. To learn more or sign up, visit http://kdp.amazon.com. 
3.	Use Kindle Create. If you are a self-publisher using Kindle Create to build your eBook, you can preview it in the tool. 
If you are testing a reflowable eBook that supports Enhanced Typesetting, you can use the thumbnail view in Kindle Previewer to review the overall layout, or use Auto-Advance to automatically flip through the book. You can also selectively preview pages that contain images, tables, lists, drop caps, and links, using the View All option in the top pane of Kindle Previewer to ensure that each of these elements appear and behave as expected. For more details on using Kindle Previewer, refer to the user guide available in the Help menu. 
Note: Amazon no longer recommends sideloading eBooks to devices for testing, because sideloading does not provide an accurate preview of Enhanced Typesetting features. 
When you preview your book, use this checklist to confirm that your Kindle book does not contain blatant errors.  
1.	Open the book for the first time and go to the cover.  
o	Cover: The Kindle book should have a cover.  
o	Single Cover: From the cover, flip to the next page. There should not be another image of the cover page.  
2.	Go to the table of contents (where applicable).  
o	On the table of contents page of your eBook, confirm that each item is clickable and links to the correct location in the book. There should be no page numbers in the TOC. 
o	Repeat this process in the table of contents displayed in the left pane of the previewer. 
3.	Go to any location in the book (reflowable eBooks only).  
o	Font size: Change the font size; the book font should change accordingly. Regular text should not be bold or italicized. 
o	Typeface: Change the typeface; the book font should change accordingly. If you have designed your book to use only a specific font file, make sure that you have followed the guidelines in section 10.3.8 Using Embedded Fonts. Not following these guidelines could lead to the Kindle settings reverting to the customer's preferred reading font.  
4.	Go back to the first page and flip through every page of the book.  
o	Images: Images should not be too small. Make sure that all text in images is legible. 
Large pictures should be scaled to fit the page and display in their entirety on one screen. o 	Tables: Tables should appear correctly. Make sure that all text in tables is legible. 
o	Material only included with physical book:  There should not be any references to material (such as a CD or DVD) that is only included with the physical book. 
o	Background settings (reflowable eBooks only): Confirm that your text is legible in all background color modes (white, black, mint, and sepia). 
o	Magnification (fixed-layout only): Activate pop-ups/panel view and check that all text content and/or panels have corresponding magnification, no content is overflowing the edge of the screen, and magnified reading order is correct. 
5.	To ensure a high-quality experience for all readers, Amazon recommends testing the accessibility of your book. Tools for checking content accessibility will vary based on your book format. 
o	Word – Use the built-in Accessibility Checker within Microsoft Word o 	PDF – Use the built-in Accessibility Checker within Adobe Acrobat Pro o 	EPUB – Use the ACE Accessibility Checker from the DAISY Consortium o 	HTML – Convert your HTML file to Word and review content accessibility with the Microsoft Accessibility Checker. 
Amazon recommends resolving all accessibility errors before uploading your manuscript to Kindle. 
Part III. Guidelines for Specific Types of eBooks 
To skip to a specific eBook format, use the following hyperlinks: 
•	Section 10: Creating Text-Heavy Fiction and Non-Fiction eBooks (Reflowable) 
•	Section 11: Creating Fixed-Layout Books with Text Pop-Ups 
•	Section 12: Creating Fixed-Layout Books with Image Pop-Ups or Virtual Panels 
•	Section 13: Creating Fixed-Layout Books Without Pop-Ups 
•	Section 14: Creating Kindle Edition with Audio/Video Content 
•	Section 15: Creating Dictionaries 
10 Creating Text-Heavy Fiction and Non-Fiction eBooks (Reflowable) 
 
Amazon refers to text-heavy fiction and non-fiction eBooks as "reflowable" because this type of content reflows when an eBook's text settings are changed. In general, a book can be converted as a reflowable eBook when the body text can be easily separated from the images without losing any context or important layout design. 
The reflowable format supports Enhanced Typesetting, as well as a number of features that allow readers to interact with and customize the way the text appears on their devices. These features include dictionary, X-Ray (when available), text-to-speech (when available), Word Wise (when available), Kindle Real Page Numbers (when available), and the ability to change text and formatting settings.  
  Metadata Guidelines 
eBooks are reflowable by default. Reflowable eBooks don’t need to specify meta name="book-type" in the OPF file, but <dc:language> and <dc:title> are required.  
If the page propagation direction is not left-to-right, page propagation direction should be provided either in the metadata or the spine. (Example: <meta name="primary-writing-mode" content="horizontal-rl"/>) 
  Layout Guidelines 
Create the content using single column layout. Do not use the CSS position: property for alignments.    Text Guidelines 
10.3.1 Specify Heading Alignment and Justification 
Because text in reflowable eBooks is fully justified by default (i.e., text-align: justify;), Amazon strongly recommends specifying the appropriate CSS alignment for all headings to prevent excessive spaces between words (i.e., text-align: left; text-align: right; text-align: 
center;). 
10.3.2 Body Text Must Use Defaults 
The body text in a reflowable Kindle book (fiction and non-fiction) must be all defaults. Amazon encourages content creators to use creative styles for headings, special paragraphs, footnotes, tables of contents, etc., but not for body text. For guidance on using embedded fonts, refer to section 10.3.8. The reason for this is that any styling on body text in the HTML will override the user’s preferred default reading settings. Users report such behavior as a poor reading experience. Here are the most important points: 
•	The body text font should be set in the CSS using the font-family attribute. Body text must use the default font size (1em) and line height. Body text should not use the <font size="…"> tag or the font-size and line-height attributes in CSS. 
•	Body text should not be primarily bold or italicized. Selected parts of the text can be bold or italicized for emphasis. This guideline only prohibits a book from being entirely bold, for example. 
•	Body text should not have an imposed font color throughout the book. If you prefer to use imposed font color in some sections of your book, do not use too light or too dark a color. Light colors will not display with enough contrast on devices set to white backgrounds or on E-reader devices. Dark colors will not display well on devices set to black backgrounds. See the W3C recommendation for maintaining a readable contrast ratio between text and background colors. For grays, use colors within the hex value range of #666 to #999.  
o	To determine if a color falls within this range, convert your color to RGB values using a tool such as http://www.w3schools.com/colors/colors_converter.asp. Plug the resulting three numbers into the following formula: 𝑌 = (0.2126 ∗ 𝑅) + (0.7152 ∗ 𝐺) + (0.0722 ∗ 𝐵). If the value of Y falls within a range of 102 and 153, this color will create a good customer experience across Kindle devices and applications. 
In a book with Enhanced Typesetting enabled, Kindle readers can be sure that any text of any color that appears above any background color will be legible. Font colors will adapt automatically to provide sufficient contrast with either the device color theme chosen by the reader or to the background color of any element. In the below example, the same colors (“yellow”, “black”, and “orange”) were applied to both the font and their background container; notice how the font color changes to provide readable contrast with the background. To learn more about Enhanced Typesetting, see section 15. 
 
•	Body text must not have a black or white background color. Customers report this as a bad user experience because it can create an awkward, boxy reading experience when the device background is set to a different color and because the text can become invisible when a user changes the background color setting on their device and the font color automatically inverts. 
•	Body text should not have a forced font face. Make sure that you have followed guidelines in section 10.3.8 Using Embedded Fonts. Not following these guidelines could lead to customers not having the ability to change their preferred reading font. 
•	Body text must not use non-breaking spaces in place of normal spaces in between words in paragraphs. 
•	Body text must not have an imposed left/right margin or padding throughout the book. If there are paragraphs that do require left/right margin to differentiate them visually from body text, such as a recipe list or a block quote, margins applied to these sections should be specified as percentages rather than ems or point values. 
•	The following font fixes will be applied in during the upload process: 
o	The font size used in the majority of the content will be normalized to 1em. 
o	The font-family used in the majority of the content will be moved to the root tag (body text). 
o	Forced font colors used in body text will be removed so the user may change the color of the text. 
10.3.3 Formatting Paragraphs 
For body text, either indents or extra line spacing must be used to distinguish paragraphs for customers. Amazon recommends using the text-indent attribute in the CSS to set indent values of no more than 4 ems for body paragraphs. 
To change the space before or after each paragraph, use the margin-top or margin-bottom styles respectively in the CSS. We recommend using em values for these attributes. 
Never use the height property to control the size of elements containing text or instances of overlapping text may occur in your book. The height property should only ever be applied to images in reflowable books. 
10.3.4 Avoid Using Fixed Values for Most Elements 
Avoid using fixed values such as points and pixels for CSS properties such as font-size, width, height, margin, padding, and text-indent. To enable rendering across various screen sizes and resolutions, specify these values in ems or percentages.  
10.3.5 Margin and Padding Formatting 
When using left or right margin and padding CSS properties, specify the values in percentage (%) instead of em units. This ensures that the margins do not grow too wide with large font sizes and impair reading. Margins should be assigned values of 0 or greater to keep content from falling off the edge of the screen or overlapping other content. Always set left and right margins to 0 for normal body text to allow users the full range of margin selection using device defaults. Top/bottom margins should be specified in ems so that spacing between paragraphs is easily distinguishable at any font or device size. 
10.3.6 Drop Caps 
Elements such as drop caps should be specified using percentages or relative units (positive or negative) instead of fixed values such as points and pixels. The top of the drop cap should be aligned with the body text. To create drop caps, Amazon recommends using the following sample CSS: 
Example: 
p.para {     font-size: 1em;     margin-bottom: 0;     margin-top: 0;     text-align: justify; 
    text-indent: 0; 
} 
@media  amzn-kf8  
{ 
    span.dropcaps 
    { 
        font-weight:normal;         font-size:320%;         float:left;         margin-top:-0.3225em;         margin-bottom:-0.3245em; 
    }     
} 
@media  amzn-mobi 
{ 
    span.dropcaps 
    { 
        font-size:3em;         font-weight: bold; 
    } } 
<p class="para"><span class="dropcaps">T</span>his is a sample 
To verify that the drop caps display as intended, test the book as described in section 9.1, Testing Kindle Books. The following is an example of a drop cap formatted using this method in a book with Enhanced Typesetting enabled (to learn more about Enhanced Typesetting, see section 15): 
 
10.3.7 Use CSS for Page Breaks 
Use the CSS page-break-before and page-break-after attributes to separate sections. Alternatively, place each section of content that should appear after a page break in a new HTML document. Do not insert blank lines of text to create page breaks. 
10.3.8 Using Embedded Fonts 
Kindle supports embedded fonts within the eBook. These fonts can be either Open Type (OTF) or True Type (TTF). Kindle does not recommend the use of Type 1 (Postscript) fonts. To provide Kindle customers with the best possible reading experience, reflowable books that use Type 1 fonts are rendered using Kindle fonts by default. On KF8-enabled devices and applications, customers have the option to turn publisher-provided fonts on or off. 
It is the responsibility of the publisher to secure the appropriate license rights for fonts. Unless embedded fonts are necessary to convey intent, Amazon recommends using the default set of fonts installed on Kindle devices and applications because they have been tuned for high quality rendering.  
When choosing a font, consider usability for readers with moderate vision impairments. Choose a simple, clear font which will contrast well against all tablet and E-reader backgrounds. 
Accessibility tip: Thin fonts are harder to read and can impact the perceived contrast of the text with the background. Amazon recommends avoiding thin fonts for the body text of your manuscript. 
Kindle also supports a monospaced font. Content in the following tags will be rendered in monospaced 
font: <pre>, <code>, <samp>, <kbd>, <tt>, <font face="courier">, <font face="monospace">. 
With the exception of <pre>, the tags listed above do not change the text alignment. If the content in these tags should be right-aligned, wrap the tags listed above in a <div> styled with CSS using textalign:right. 
10.3.9 Customizing Font Selection 
The primary or main font in a book should be set at the <body> level. If you prefer to use additional text styling such as bold or italics, ensure that the styles are set on the text rather than the font so that any font that the customer selects correctly displays these styling elements. Below are examples of both correct and incorrect implementation of customizing fonts in a Kindle book.   
Incorrect HTML Code 	Correct HTML Code 
<html> 
<body> 
<p style="font-family:PrimaryFont"> Primary font content</p> 
<p style="font-family:SecondaryFont"> 
Secondary font content</p> 
<p style="font-family:PrimaryFont"> Primary font content</p> 
<p style="font-family:PrimaryFont"> Primary font content</p> 
</body> 
</html> 	<html> 
<body style="font-family:PrimaryFont"> 
<p>Primary font content</p> 
<p style="font-family:SecondaryFont"> 
Secondary font content</p> 
<p>Primary font content</p> <p>Primary font content</p> 
</body> 
</html> 
The same behavior can be achieved by using CSS classes as shown below. 
Incorrect CSS Code 	Correct CSS Code 
body{ font-size: asize; } 
.indent { font-size: asize; font-family: PrimaryFont; 
} 
.sidebar-text { font-family: SecondaryFont; font-weight: bold; 
} 	body { font-family: PrimaryFont; font-size: asize; 
} 
 
.indent { 
font-size: asize; 
} 
 
.sidebar-text { font-family: SecondaryFont; weight: bold; 
} 
When coding fonts, make sure that HTML tags are closed correctly to avoid an override conflict. When there is an override conflict, the font files within the book will be intentionally removed to provide Kindle customers with the best possible reading experience when they select the font settings.   
For example: 
Incorrect HTML code 	Correct HTML code 
<html> 
<body style="fontfamily:PrimaryFont"> 
<p>Primary font content</p> 
<div style="fontfamily:SecondaryFont"> 
Secondary font content. 
<div style="font-family:ThirdFont">  
Third font content  
</div> 
</div> 
<p>Primary font content</p> 
</body> 
</html> 	<html> 
<body style="font-family:PrimaryFont"> 
<p>Primary font content</p> 
<div style="fontfamily:SecondaryFont"> 
Secondary font content. 
</div> 
<div style="font-family:ThirdFont">  
Third font content  
</div> 
<p>Primary font content</p> 
</body> 
</html> 
 
Incorrect CSS code 	Correct CSS code 
h2.title, h3.title {   text-indent:0;   text-align:center;   font-family:'PrimaryFont'; 
} h3.title  {   font-family:'SecondaryFont';    font-size:2em;   font-weight:bold; 
} 
 	h2.title  {   text-indent:0;   text-align:center;   font-family:’PrimaryFont’; 
} h3.title  {   text-indent:0;   text-align:center;   font-size:2em;   font-weight:bold;   font-family:’SecondaryFont’; 
} 
10.3.10 Page Number Guidelines  
Kindle books do not always map directly to page numbers in physical editions of the book. Even if the Kindle Real Page Numbers feature is activated in the Go To menu, references to page numbers within the eBook should be handled as follows:  
•	Table of contents: If there are page numbers in the print source's TOC, they should be removed in the digital conversion. The name of the section should be retained and hyperlinked to the relevant location in the eBook. For example, if a print source TOC displays the entry "Chapter 1 ... P. 36", then the eBook should only display "Chapter 1" hyperlinked to the correct digital location.  
•	Internal links: If there is text that refers to another page in the eBook, such as "see page XX", this text should be linked to the relevant paragraph within the eBook.  
•	Index: Every page number in the index should be linked to the relevant paragraph in the eBook (or the relevant illustration, table, or chart).  
•	Links within index: If there is an entry that references another section of the index, such as "see also XXX", this text should be linked to the relevant section within the index. 
10.3.11 Enabling Real Page Numbers 
Readers enjoy page numbers because they are a familiar method of navigation and allow readers to coordinate reading with their peers who use print versions, such as in a classroom or book club. Authors and publishers can include Amazon’s Real Page Number feature in their Kindle books by adding page numbers in the EPUB, which are displayed on Kindle devices and applications.  
Publishers should map the Real Page Numbers in the eBook to the print edition (hardcover, paperback, etc.) that most closely matches the eBook and provide that ISBN in metadata as described in http://kb.daisy.org/publishing/docs/navigation/pagelist.html#desc. At this time, Real Page Numbers cannot be previewed in Kindle Previewer or by sideloading, but they are visible when your eBook is published and are mentioned on the detail page. 
To support the Real Page Number feature:  
•	EPUB 3: Follow the EPUB 3 accessibility guidelines for page numbers: http://kb.daisy.org/publishing/docs/navigation/pagelist.html 
•	EPUB 2: Follow the NCX requirements in OPF 2.0 section 2.4.1.2: 
http://www.idpf.org/epub/20/spec/OPF_2.0_latest.htm#Section2.4.1.2 
Additional notes: 
•	Only use Roman or Arabic numerals for adding page numbers. (Example: i, ii, iii, etc. and/or 1, 2, 3, 4, etc.) • 	Do not add additional text such as “Page” in the name attribute of the pages tags (Example: 
“Page 1”, “Page 2”). Kindle adds the word “Page” in front of the page number attribute by default. 
•	Make sure there are no duplicate HTML locations referenced as different pages. 
•	Make sure there are no duplicate page labels referenced as different HTML locations. 
•	Make sure there are no empty page labels (even for blank pages). 
•	Make sure there are no anchors without proper targets. 
•	Make sure that all paths to the HTML pages are relative.  
10.3.12 Footnote Guidelines 
Amazon strongly recommends marking footnotes with the HTML5 aside element, together with the epub:type attribute. This allows accessible reading systems to ignore the footnotes except when followed by their referents and allows any reading system to handle them more intelligently (e.g., as popups). This usage ensures that even if the EPUB semantic is not recognized, the notes will still be treated as secondary content due the nature of the HTML5 aside element.  
Regardless of whether the aside element is used, Amazon requires formatting footnotes with bidirectional hyperlinks (the text is linked to the footnote and the footnote is linked back to the text). This makes it easier for customers to return to the text after viewing the footnote. On some Kindle devices, such as Kindle Paperwhite, footnotes with bi-directional hyperlinks are displayed in a pop-up. 
For a better reading experience, Amazon strongly recommends placing the footnote text at the end of the chapter or book. 
Define footnotes using either of the following methods: 
Method 1 (preferred): 
<p>This footnote example uses the aside element with the epub:type attribute and bi-directional hyperlinks.<sup><a id="source" href="#ft-1-1" epub:type="noteref">1</a></sup></p> 
... 
<aside id="ft-1-1" epub:type="footnote"> 
<p><a epub:type="noteref" href="#source">1.</a> This is the footnote text, which should be placed at the end of the chapter or book.</p> 
</aside> 
Method 2: 
<p>This footnote example uses bi-directional hyperlinks only.<sup><a href="footnotes.html#fn1" id="r1">[2]</a></sup></p> 
... 
<p id="fn1"><a href="chapter01.html#r1">2.</a> This is the footnote text, which should be placed at the end of the chapter or book.</p> 
If your book includes footnotes or endnotes without numbers or symbols, Amazon recommends creating a single link from the note to the relevant text in the book. 
Example: 
<p>This example describes an <a id="fn1"/>event that happened.</p> 
... 
<p><a href="chapter01.html#fn1">event that happened</a> This is the endnote text, which provides a reference for the details of the event.</p> 
  Image Guidelines 
These guidelines apply to reflowable fiction and non-fiction books, but are not applicable to imageintensive fixed-layout children's books (see section 11) and fixed-layout graphic novels/manga/comics (see section 12). For cover image guidelines, see section 4. 
10.4.1 Use Supported Input Formats 
Kindle devices and reading applications do not support TIFF, multi-frame GIFs, or any image with a transparency. 
•	KF8 supports GIF, BMP, JPEG, PNG, and Scalable Vector Graphics (SVG) images. 
•	Enhanced Typesetting supports GIF, JPEG, and PNG. Enhanced Typesetting does not support SVG images, but SVG rasterization is partially supported. 
When using images for schemas, charts, tables, maps, or anything that includes text, pay special attention to the legibility of the final image.  
Add images to the source using the standard HTML <img> tag. If the image is meaningful to the content, use the alt attribute to provide text that conveys that meaning to customers who use assistive technology. The alt text should be less than 140 characters and should describe the image and its meaning. If the image is decorative and not meaningful to the content, or if the surrounding text on the page provides enough context for the image, set the alt attribute to null with alt ="" so that it can be ignored by assistive technology. 
Important: Use RGB as the color profile when saving your files. Kindle does not support sRGB or CMYK. 
10.4.2 Image Size and Quality Standards 
Images must meet the minimum quality standard of 300 ppi for the intended display size. The minimum standard for a full-page image in a book after allowing for margins, running heads, page numbers, and captions is an image size of 4" x 6". At 300 ppi, this image must be a minimum of 1200 x 1800 pixels. The following terms will define specific use cases and provide examples of how to meet this standard. 
•	Important/Not Important Images: Images are considered important if they are meaningful to the content. Examples of important images include images with captions, maps, tables, equations, line art, illustrations, and photographs. All important images must meet the minimum 300 ppi standard.  
Images are considered not important if they are only for decorative purposes or do not add value to the content. Examples of non-important images include the back covers, fleurons, logos, and social media icons.  
•	Cover Images: Cover images should always have a full page layout and be at least 1200 pixels in width or 1800 pixels in height.  
•	Block Images: Amazon recommends using high resolution images and the largest layout available. Amazon measures 300 ppi on a 4" x 6" canonical device (translating to 1200 pixels x 1800 pixels). To calculate the largest possible layout for an image, divide either the pixel width or height of the image by the 4" x 6" screen, i.e., 1200 (width) x 1800 (height). Providing the % width or % height of an image in the image tag is required to calculate how much of the screen the image should occupy.  Refer to the following chart for the minimum pixel requirements to meet Amazon’s 300 ppi requirement. 
Image Layout Width or Height 	Minimum Pixel Width Required 	Minimum Pixel Height Required 
100% 	1200 	1800 
80% 	960 	1440 
60% 	720 	1080 
40% 	580 	720 
Note: Amazon does not recommend laying out important images at less than 40%.  
Examples of coding width and/or height for an image:  
•	Width or height can be provided directly in the image tag (see bold text). 
Example: 
<img src="happy.gif" alt="Happy face" style="width:70%">  
•	Width or height can be provided in the parent div tag (see bold text).  
Example: 
<div style="width:50%">  
<img src="image4.png" />  
</div>  
The maximum file size of an EPUB is 650 MB. KindleGen performs automatic image conversions to optimize the content for Kindle. 
See section 10.4.5 regarding exceptions for images that are only available in low-resolution such as historical photographs. 
10.4.3  Image Dimensions for Responsive Layouts 
Amazon recommends that block and float images be styled using a percentage value for the width style attribute. This will ensure that images always occupy the same percentage of space on the screen irrespective of device resolution. 
Inline images should be sized in em units so that they scale in relation to the text around them when users adjust the font size of their reading system. 
10.4.4 Use Color Images 
For the best user experience across Kindle devices and applications, use color images whenever possible and relevant. If an image is a photograph, it should be formatted as a JPEG. 
Even in marketplaces where only E-reader devices are currently available, use color images when possible for future compatibility.   
10.4.5 Photographs Should Be Optimized for High-Resolution Devices 
Photographs should use the JPEG format and be saved at high quality. Photographs should use the highest resolution available within the file size limit.  
Photographs of less than 300 x 400 pixels will be scaled based on the device resolution and may become blurry as a result. To display a smaller image provide a larger image and use CSS to shrink to the desired size. 
 
Amazon recommends that images display clearly at 2X magnification across devices. This means that if an image is intended to display at full width on device, its width should be captured at 3200 px (this is twice the width of our highest resolution device, the Kindle Fire HDX 8.9”). Smaller images can be resized accordingly.  
If the photographs are in GIF format or are too small, converting them to JPEG or artificially increasing the size does not improve the quality. Go back to the original source to create a JPEG image with sufficient resolution. 
Some images, such as historical photographs, may not be available at 300 ppi or greater. In these situations, provide the best image quality possible. Amazon strongly recommends images meet a minimum of 300 ppi. Any images below 72 ppi will cause the book to fail conversion. 
10.4.6 Use GIF or PNG for Line-Art and Text 
Line-art images are graphics drawn with a limited number of solid colors (such as images drawn by Adobe Illustrator, Microsoft Paint, or Microsoft Power-Point, including black-and-white drawings). Text, graphics, charts, and tables are examples of images that are line-art. 
Line-art should be in GIF or PNG format. The JPEG algorithm tries to blend parts of the image together, and blurs the sharp edges of the line-art, causing the image (and any text it contains) to be blurry. 
Text appearing in line-art images should be sharp and legible. 
Optimize line-art GIFs before submitting them to KindleGen. Resizing or JPEG compression introduces blurriness or unwanted artifacts in line-art images, which is why Amazon insists on GIF or PNG file formats for line-art. 
To optimize GIFs and PNGs and make them fit the image size limit, try the following tips: 
•	Try reducing the number of colors used. This can often be done without altering the quality of the image. Line-art images that appear to be black and white might actually be in color because of certain anti-aliasing algorithms. Here is an example (notice the shades of red and blue around the “A” in the left picture): 
  
•	Remove white margins around the image, if any exist. When cropping, consider how the image will look on devices set to white, sepia, mint, and black backgrounds. 
•	Resize the image, if necessary, but pay close attention to the legibility of text. (see section 10.4.7, Image and Font Size Requirements for Line-Art and Text). 
10.4.7 Image and Font Size Requirements for Line-Art and Text 
An image containing text should not be significantly larger than a Kindle screen. The Kindle E-reader devices offer the possibility to rotate an image to use more screen real estate. The Fire tablets and the Kindle for iPhone application allow zooming and panning. 
• 	The MINIMUM size of text is 6 pixels for the height of a lowercase “a.” The image itself will need to be larger than 6 pixels in height if there is any extra space above or below the “a.” For an image that contains only a single line of text, such as the example below, the image should be at least 45 pixels in height so that it displays proportional to surrounding text content. 
  
Accessibility tip: Text within images cannot be read using a screen reader or refreshable braille display. If the image contains nothing but text, Amazon recommends using HTML instead of an image to render the text. This applies to simple and text-heavy images. (See section 10.4.8, Prefer HTML to Images.) 
10.4.8 Prefer HTML to Images 
Do not render large chunks of text as images. If text can be separated from the surrounding art it should not be an image. Instead, it should be HTML. 
The following is an example of a text-heavy image that should be HTML.  
Note: The image would be shrunk to fit the screen and become unreadable, while an HTML version would be paginated. 
  
10.4.9 Positioning Image Captions  
Amazon recommends placing a caption below the related image, so that the reader views the image before the caption. Place the caption in a separate <div> tag so that it displays below the image. 
Example: 
<img src="test.jpg" style="display:block" /> <div>This is a caption</div> 
10.4.10 Controlling Image Aspect Ratio 
To preserve aspect ratio of images, width and height cannot both be set to a fixed percentage. Either width or height can be set to the fixed percentage (such as 100%), but then the other property should be set to “auto” to preserve the aspect ratio. 
10.4.11 Use Supported SVG Tags and Elements 
Enhanced Typesetting currently has minimal support for Scalable Vector Graphics (SVG).  
Mandatory: 
•	viewBox is mandatory and it must have four values (min x, min y, width, height). All four values must be integers and the first two values must be 0. 
•	Provide width and height in percentages (preferred) or integers. 
•	Provide meaningful alternative text with the <alt=> attribute on SVG images where appropriate (see section 10.4.1 for details). 
Supported: 
•	Block and inline SVGs are supported. 
•	Always use only <svg:> without namespaces for SVGs. 
•	<svg> with only one <image> tag as child is supported.  
•	<img> with .svg in href attribute is supported.  
•	Background image as .svg is supported. In this use case, Amazon only supports certain elements inside the SVG file: <svg>, <path>, <g>, <polyline>, <polygon>, <rect>, 
<line>, <circle>, <ellipse>, <radialGradient>, <linearGradient>, 
<stop>, feGaussianBlur, filter, <defs>, <clipPath>, <use>, title. 
Not Supported: 
•	<svg> with <text> is not supported. 
•	<svg> with preserveAspectRatio="slice" is not supported. If nothing is specified, default is taken automatically. 
•	If the transform attribute is used, it should include "translate(0 0)". Other complex transform attribute values are not supported. 
•	If the visibility attribute is used, it must have "visible" as the value. Otherwise, conversion fails. 
•	Use the <a> tag only within <rect> and with fill-opacity="0.0". The <a> will be removed. 
Troubleshooting: 
•	Open the HTML page with an SVG image in a browser. If it is not visible in the browser, then that SVG image is not supported in Enhanced Typesetting. 
•	eBooks with more than 25 SVG images are not supported in Enhanced Typesetting.   Table Guidelines 
10.5.1 Avoid Large Tables 
Amazon recommends using HTML <table> layouts for tabular content and not rendering tables as images.  
A table rendered as an image can’t be paginated because the entire image is displayed on one screen. Tables displayed as images cannot be read by customers using assistive technology. If the table is rendered using HTML <table> tags, pagination is available and the content of the table can be made available to screen readers and refreshable braille displays. Readers will also be able to navigate through the cells in the table. If the table is significantly wider than the screen and forces panning, it creates a poor user experience.  
For the best user experience, tables should not contain whole paragraphs of text or large pictures in a cell. 
If a table is too large or contains too much text in its cells, consider reformatting it in a way that optimizes for readability. Single columns of HTML text provide the best reading experience for customers using a variety of font sizes. Amazon recommends keeping tables below 100 rows and 10 columns for devices of all sizes. 
If the table must be rendered as an image, refer to section 10.4 Image Guidelines and section 10.5.3 Split Tables as Needed. 
10.5.2 Create Simple HTML Tables 
Use the <table> tags to create simple tables with standard rows and columns that can be displayed on Kindle devices and applications. KF8 has support for nested tables and merged cells, but Amazon recommends that publishers use this judiciously and only when necessary. Enhanced Typesetting does not support nested tables. 
Colspan and rowspan attributes should be less than or equal to the total number of columns or rows (as appropriate) in the table.  
Avoid negative margins in the table content for better readability. Enhanced Typesetting does not support negative margins. 
To ensure content in tables can be efficiently consumed by customers using assistive technology, include column and row headings and table captions. Screen reader support for table navigation isn’t currently available on all devices or reading applications. We recommend creating accessible HTML tables for future compatibility.  
10.5.3 Split Tables as Needed 
There are times when it may be necessary to format a table as an image, but the image is still too large to be legible on one Kindle screen. In this case, it is a good idea to split the image. The following example is a guideline to use when splitting a 2-page table. This logic can be extended for multiple-page table images. 
Example: Split the image in half horizontally 60% of the way down the image, then split the header, copy it to the bottom half of the image, and stitch these into a new image. The final two images should then be the same size, with table headers.  
Revise the source image, not the converted GIF; otherwise, the image will be converted into GIF format twice, which might result in lower quality. 
10.5.4 Table Features with Enhanced Typesetting 
If an eBook has Enhanced Typesetting enabled, an enhanced Table Viewer experience will be enabled for readers on tables with more than three columns by double-tapping on the table. Table features with Enhanced Typesetting include:  
•	Customers do not experience any data loss when reading tables. Text in tables is redistributed if it does not fit on the page and is not cropped on the screen edges.  
•	Enhanced Typesetting avoids excessive wrapping of text by using additional white space on the page to redistribute column widths based on the screen size. Minimum padding between rows and columns is always maintained to preserve proportional row and column boundaries for any font size or device type.  
•	Customers can navigate through multi-page tables with the additional context of a continuation indicator.  
•	Customers can interact with a table that may have spanned multiple pages in a single view inside the Enhanced Typesetting viewer with panning, zooming, text highlights, and text lookup available.  
Best practices for utilizing Enhanced Typesetting with tables: 
•	Use a table structure of <thead>, <tbody>, <tfoot>. 
•	Do not add empty columns to provide extra padding. 
•	Use inline images instead of block images. 
•	Books with large tables might not support Enhanced Typesetting. To check whether your book supports Enhanced Typesetting, use Kindle Previewer (see section 16.4). 
Example: 
<table class="defaultcontent" bordercolor="#E66C2C" border="1" cellpadding="4" p align="left"> 
<caption>Ipsum lorem sit dolor</caption> 
  <thead> 
    <tr> 
      <th align="left"><i>Lorem ipsum</i></th> 
      <th align="left"><i>Dolor sit</i></th> 
    </tr> 
  </thead> 
  <tbody> 
    <tr> 
      <td><b>amet</b> amerit</td> 
      <td><b>amat</b> amerat</td> 
    </tr> ... 
  </tbody>  
  <tfoot> 
 	<tr> 
 	  <td><b>sedi</b> sed</td> 
 	  <td><b>seda</b> sad</td> 
 	</tr> 
  </tfoot>  	 
</table> 
Enhanced Typesetting will utilize the space on the page to avoid wrapping text and display a clear readable table. 
  
  MathML Support 
Enhanced Typesetting supports MathML. 
Supported Tags: 
maligngroup  	mrow 
malignmark  	ms 
math 	mspace 
menclose 	msqrt 
mfenced 	mstyle 
mfrac 	msub 
mi 	msubsup  
mlabeledtr 	msup  
mmultiscripts 	mtable 
mn 	mtd  
mo 	mtext  
mover 	mtr 
mpadded 	munder 
mphantom 	munderover 
mroot 	 
 
Unsupported Tags: 
annotation 
maction  
mglyph 
mlongdiv  
msgroup  
mstack 
semantics 
 
Troubleshooting: 
Open the HTML page with MathJax. If MathML is displayed without any issues, then it will be supported in Enhanced Typesetting. 
11 Creating Fixed-Layout Books with Text Pop-Ups 
 
Certain books have elements with fixed dimensions and text positioning that do not allow fonts to be resized or text to be reflowed. For example, coffee table books and children’s picture books have fullpage images with text set precisely in relation to the background art, although this format is not exclusive to these types of books.  
Fixed-layout books do not support reflowable text and should only be used when the entire book is wellsuited to a fixed-layout format; books cannot be partially reflowable or partially fixed-layout. For details on creating this type of eBook with Kindle Kid’s Book Creator, see section 2.2.4.  
This format does not currently support Enhanced Typesetting. 
Important: Nested anchor tags are not supported in fixed-layout books. Fixed-layout books with nested anchor tags will be suppressed. 
  Metadata Guidelines  
The OPF file specifies metadata necessary for fixed-layout books. While similar, the various types of fixed-layout formats have key differences. Unless explicitly stated, guidance for fixed-layout books with text pop-ups should not be applied to any other format, such as fixed layout books with image pop-ups or Virtual Panels. 
Metadata 	Description 
Layout can be specified using one of the following metadata fields: 
1)	<meta 
property="rendition:layout">prepaginated</meta>  
2)	<meta name="fixed-layout" content="true"/> 	Required. Identifies the book as having a fixed layout.  
Valid values for rendition:layout metadata are reflowable or pre-paginated. The default value is reflowable.  
Valid values for fixed-layout metadata are true or false. The default value is false.  

Metadata 	Description 
<meta name="original-resolution" content="1024x600"/> 	Required. Identifies the original design resolution of the content (“1024x600” is only an example). The pixel dimensions can have any positive integer value. These values must be in proportion to the overall aspect ratio of the original content.  
Orientation can be specified using one of the following metadata fields: 
1)	<meta property="rendition:orientation">lands cape</meta> 
2)	<meta name="orientation-lock" content="landscape"/> 
Note: This is not currently supported in iOS. 	Optional (but recommended).  
Valid values for rendition:layout metadata are 
portrait, landscape, or auto. Locks the orientation of the book to either portrait or landscape. If the value is auto, both portrait and landscape modes are supported. The default value is auto.  
Valid values for orientation-lock metadata are portrait, landscape or none. Locks the orientation of the content to either portrait or landscape. If the value is none, both portrait and landscape modes are supported. The default value is none. 
<meta name="primary-writing-mode" content="horizontal-rl"/> 	Optional. Defines page rendering order, reading mode, and reader navigation (including Kindle Text 
Pop-Up, Kindle Panel View, and Kindle Virtual Panels). Valid values are horizontal-lr, horizontal-rl, vertical-lr, and verticalrl.  
The default behavior is horizontal-lr when the page progression direction is left-to-right or not specified. Use the value horizontal-rl to set the page progression direction to right-to-left. 
Use the value vertical-rl to set a page progression direction of right-to-left for Chinese, Japanese, and Korean books.  
<meta name="book-type" content="children"/> 	Optional for children’s books. Removes reader functionality (e.g., share) which may not be relevant for certain books such as children’s eBooks. Valid values are children or comic. 
  Cover Image Guidelines: Including Back Cover for Children's Content 
While Kindle books in reflowable format do not use back covers, it provides a sense of closure to the narrative for children’s content. It is best to include a back cover as part of the design of children’s books. 
(Non-children’s books that use this format do not need to provide a back cover.) Remove barcodes, price listings, and promotional content from the back cover image. Text pop-ups are required for story text on the back cover and recommended but not required for other back cover text.   Text Guidelines 
11.3.1 Minimum Text Size 
Capital letters in pop-ups must be at least 4mm high for children’s content, or 2mm high for other content, when viewed on a 7" device. If the base text outside of pop-ups meets this rule, pop-ups may not be necessary. See section 11.4.2, Requirement #2: Using Region Magnification (Pop-Ups), for details on using pop-ups. 
11.3.2 Including Specific Fonts 
Fixed-layout titles do not allow users to choose and vary fonts. Using CSS @font-face and packaging fonts with the title guarantees book design look-and-feel to be consistent across all devices and screens. This not only ensures that the exact fonts used for the source are used in the fixed-layout title, but that HTML text has more fluid rendering between the page view and the Region Magnification view.  
Example: 
@font-face {   font-family: "Arial"; /* assigns the name of the font to use */   src: url(../fonts/arial.otf); /* includes the file for the correct font */ } 
Accessibility Tip: Thin fonts are harder to read and can impact the perceived contrast of the text with the background. Amazon recommends avoiding thin fonts for the body text of your manuscript. 
  Content Requirements 
11.4.1 Requirement #1: Using HTML File Structure 
Fixed-layout content must have a single HTML file for each page represented on a Kindle device. This can be accomplished by using one image in the HTML file or by using the HTML file to stitch two images together to be viewed as one page when orientation-lock is set to landscape.  
Portrait orientation lock:  
1	print page = 1 HTML file  
Example:  
  
Landscape orientation lock:  
2	print pages (1 two-page image) = 1 HTML file Example:  
  
11.4.2 Requirement #2: Using Region Magnification (Pop-Ups) 
Fixed-layout content does not allow the user to change the font size; allowing font sizes to change could obfuscate content relevant to storytelling. Kindle uses Region Magnification (pop-ups) to enlarge fixedlayout text without altering the original layout. For an example of Region Magnification, see the image near the end of this section.  
The user activates Region Magnification by double tapping an “active area” on touch screen devices. (On non-touch screen devices, clicking the up arrow on the 5-way controller selects the region and clicking the center button activates Kindle Text Pop-Up or Kindle Panel View.) During Region Magnification, the active area (source element) is hidden and the magnification area (target element) is displayed. When an eBook is set up to support Region Magnification, KindleGen automatically detects the Region 
Magnification code and sets the Region Magnification metadata value in the OPF file to "true". 
To support Region Magnification, the following steps are required: 
1.	Set the active area by creating a well-defined HTML anchor (<a>)element around the text to be enlarged. The anchor must specify the app-amzn-magnify class. The anchor should also have the following attributes stored in a JSON object (http://www.w3schools.com/json/json_syntax.asp) as part of the data-app-amzn-magnify value: 
a.	"targetId":"<string:elementId>" = unique element id of the magnification area (position and font size are set in CSS file) 
b.	"sourceId":"<string:elementId>" = unique element id of the source that will be magnified 
c.	"ordinal":<integer:reading order> = reading order of the magnification areas (the order in which panels appear as part of the reading flow). This is required for all text that uses Region Magnification. 
2.	When magnification is activated, the source text is no longer displayed. Create a target <div> element that is aligned to completely cover the text being magnified and positioned to minimize covering the background art of the page. This ensures that when a user activates Region Magnification, the source text will not disappear from the page view. It is also important to not position a pop-up directly abutting the right or bottom edges of the screen. Differences between device types can create content overflow error if pop-ups are too close to these edges. Check content on as many different kinds of devices as possible before publishing.   
3.	The font size of text in the Region Magnification <div> should be set to 150% of the regular font size on the page. There are several exceptions to this: 
•	One exception is when the text on the page is so large that magnifying it to 150% would make it harder to read instead of improving readability. Region Magnification is not necessary for text with a height of at least 4mm in children’s content or a height of at least 2mm in nonchildren’s content on a 7" device.  
•	Another exception is when the text on the page needs to be increased by more than 150% to improve readability in the Region Magnification <div>. For example, if the font size of the text on the page is 45%, the font size of the text in the Region Magnification <div> may need to be magnified to 225% to be readable.  
  
Fixed-layout sample page 	  
Same sample page with Region Magnification activated 
Example: 
<div id="fs3-1-org" class="txt fs3-txt1"> 
<a class="app-amzn-magnify" data-app-amzn-magnify='{"targetId":"fs3-txt1-magTarget", 
"sourceId":"fs3-1-txt", "ordinal":2}'> 
<p id="fs3-1-txt">Lorem Ipsum dolor sit amet.</p></a></div> 
… 
<div id="fs3-txt1-magTarget" class="target-mag fs3-txt1"></div> 
  HTML and CSS Guidelines 
11.5.1 Applying CSS Reset 
Apply a CSS reset to fixed-layout books. A CSS reset removes the inconsistent styles that browsers automatically apply, such as font sizes, margins, etc. Adding a CSS reset, such as the YUI reset (http://yuilibrary.com/yui/docs/cssreset), removes these inconsistencies, allowing designers to build on a dependable styling template.  
11.5.2 CSS Files For Fixed-Layout Books 
To increase page-turn performance on fixed-layout books, CSS files may be split so that each group of HTML pages has its own CSS file. CSS files should only contain information that is directly referenced by the associated HTML files. 
11.5.3 Optimizing Content for Full Screen  
Kindle books are read across a wide variety of devices (e.g., Fire tablets and other manufacturers’ smartphones and tablets) and a wide variety of screen dimensions. The 2013 Kindle Fire HD 8.9” has a resolution of 1920 x 1200 pixels. Design the content to maintain this aspect ratio, if possible.  
For the best user experience, Amazon strongly encourages publishers to design fixed-layout content to maximize the available space of the screen dimensions. If the content has a different aspect ratio or size, the Kindle devices and applications display it scaled to fit the screen, centered, and surrounded by a white margin (letterbox).  
Fixed-layout and other image-heavy content is more likely to be magnified because customers prefer to read with Kindle Panel View or on devices with large screens. The best practice is to use the highest resolution images possible. Amazon recommends submitting images scaled to support at least 2X magnification with high quality. For example, if planning for the 2013 Kindle Fire HD 8.9", the image pixel dimensions should be at least 3840 x 2400 (this matches the aspect ratio and would support 2X zoom). Always use Kindle Previewer to validate the quality of the content. 
11.5.4 Using Large Region Magnification Tap Targets in Fixed-Layout Books with Text Pop-Ups The primary purpose of Region Magnification is to aid accessibility and is more effective when the tap target is larger than the area being magnified. To enable a larger area, consider adding a padding of 20 to 40 pixels to the app-amzn-magnify anchor elements, but do not let the tap targets overlap. 
11.5.5 Using position:absolute for Text on Image 
For text on an image that needs to be positioned exactly, use the position:absolute attribute. Only use this attribute for books that need a fixed layout, such as children’s picture books with text specifically positioned in relation to background image elements. 
11.5.6 Future-Proofing Fixed-Layout Content with Text Pop-Ups  
By definition, fixed-layout is designed for a single screen size. To future-proof your content, Amazon recommends using pixels for text size and positioning text blocks. Specifying font size or text position in percentages can result in fractions of pixels which may be interpreted differently across devices. 
  Creating Fixed-Layout Books with Text Pop-Ups with Multipage Background Images and Text 
This section explains the proper way to create pages that contain a single background image and text. 
While there are many potential solutions, Amazon’s goal is to ensure that markup is easily portable with minimal effort. The provided template meets this goal by updating the CSS rules without changing the HTML.  
11.6.1 Using Side-by-Side Images When Orientation-Lock Is Set to Landscape 
Many books have a landscape spread that consists of a single image. Other books have a landscape spread that consists of two side-by-side images stitched together. 
In the example below, the landscape spread is 1024 x 600 pixels, which is full-screen resolution for the Kindle Fire (1st generation). The images for each page should have dimensions exactly half the width of the full screen: 512 x 600 pixels. The unique parts of each element are labeled using CSS IDs; the common parts use CSS classes. The left image displays on the left side of the spread. The right image is shifted to the right side of the page by defining a margin-left style set to the width of the left side image. 
 
The end result is two pages stitched together to make a single image to be viewed in landscape mode. 
This differs from a synthetic spread, where one page is visible in portrait mode and two side-by-side pages are visible in landscape mode, which is unique to the comic book-type. Guidance on synthetic spreads can be found in section 12.4.1. 
HTML: 
<div class="fs"> 
<div id="fs9-img" class="lPage"></div> <div id="fs10-img" class="rPage"></div> 
</div> 
CSS:  
/* Region sized for both pages */ 
#fs9-img {  	background-image: url("../images/005a.jpg");  
background-size:100% 100%; 
} 
#fs10-img {  	background-image: url("../images/005b.jpg");  
background-size:100% 100%; 
} div.fs {   height: 600px;   width: 1024px; /* 2 x page width */   position: relative; 
} div.lPage {   position: absolute;   background-repeat: no-repeat;   height: 600px;   width: 512px; /* 1 x screen width */ 
} div.rPage {    position: absolute;   background-repeat: no-repeat; 
  height: 600px;   width: 512px; /* 1 x screen width /   margin-left: 512px; /* this value equals the value of the left side image width */ } 
11.6.2 Positioning Text Blocks 
Specify the proper position and font size using percentages. This allows the position to scale consistently at different resolutions, ensuring compatibility across a wider range of devices and screens. Each paragraph should be grouped within a single <div> element, with multiple lines broken by <br/> elements. If custom line spacing is required, assign this via CSS style declarations instead of adding extra markup such as multiple <div> containers or extra line break tags.  
The example in section 11.4.2, Requirement #2: Using Region Magnification (Pop-Ups), expands on the two-page image example and illustrates how to place text on top of a background image: text is positioned within a fixed spread block, uses percentages for the margin attribute, and is aligned and spaced via CSS. Text pop-ups should be positioned so that they cover the corresponding text in the background.  
11.6.3 Aligning Text  
By default, text aligns to the upper left corner of the containing HTML element. Many books may have text that is right-aligned, bottom-aligned, or justified. The easiest way to identify the alignment is to imagine an outline around the text and identify which edges of the paragraph are associated with a margin (top, left, right, bottom). 
Never use non-breaking space (&nbsp;) characters for text alignment. Instead, use CSS top, right, bottom and left to position <div> elements that contain absolutely positioned text. Use two adjacent sides to position each <div> element. For example, top and left but never top, left, and bottom. CSS text-indent and line-height are useful in aligning text within HTML block elements.  
12 Creating Fixed-Layout Books with Image Pop-Ups or Virtual Panels 
 
Graphic novels, manga, and comics (hereafter referred to as graphic novels) are the most common fixedlayout books with image pop-ups or Virtual Panels. They are similar to children’s books, but present a unique challenge because they tend to be longer and have more complex content.   
Graphic novels include a large amount of detail in images that displays on a 1920 x 1200 screen. To overcome this and other accessibility concerns, Amazon encourages the use of customized content and our Kindle Panel View feature, which optimizes the content for a high-resolution reading experience. For more details on Kindle Comic Creator, see section 2.2.3. 
This format supports Enhanced Typesetting, provided that there is no hybrid text in the eBook (see section 11.6). 
Important: Nested anchor tags are not supported in fixed-layout books. Fixed-layout books with nested anchor tags will be suppressed. 
  Metadata Guidelines  
The OPF file specifies metadata necessary for fixed-layout books. For a demonstration, see the graphic novel example at www.amazon.com/kindleformat (under the KindleGen Examples heading in the sidebar). 
While similar, the various types of fixed-layout formats have key differences. Unless explicitly stated, guidance for fixed layout books with image pop-ups or Virtual Panels should not be applied to any other format, such as fixed-layout books with text pop-ups. 
Metadata 	Description 
Layout can be specified using one of the following metadata fields: 
1)	<meta property="rendition:layout">prepaginated</meta> 
2)	<meta name="fixed-layout" content="true"/> 	Required. Identifies the book as having a fixed layout.  
Valid values for rendition:layout metadata are reflowable or pre-paginated. The default value is reflowable.  
Valid values for fixed-layout metadata are true or false. The default value is false.  
<meta name="original-resolution" content="1024x600"/> 	Required. Identifies the original design resolution of the content (“1024x600” is only an example). The pixel dimensions can have any positive integer value. These values must be in proportion to the overall aspect ratio of the original content.  
Orientation can be specified using one of the following metadata fields: 
1)	<meta property="rendition:orientation">lands cape</meta> 
2)	<meta name="orientation-lock" content="landscape"/> 
Note: This is not currently supported in iOS. 	Optional (but recommended).  
Valid values for rendition:orientation metadata are portrait, landscape, or auto. 
Locks the orientation of the book to either portrait or landscape. If the value is auto, both portrait and landscape modes are supported. The default value is auto. 
Valid values for orientation-lock metadata are portrait, landscape or none. Locks the orientation of the content to either portrait or landscape. If the value is none, both portrait and landscape modes are supported. The default value is none. 
Metadata 	Description 
<meta name="primary-writing-mode" content="horizontal-rl"/> 	Required for Virtual Panels in manga with right-toleft reading order; optional for other fixed-layout books. Defines page rendering order, reading mode, and reader navigation (including Kindle Text 
Pop-Up, Kindle Panel View, and Kindle Virtual Panels). Valid values are horizontal-lr, horizontal-rl, vertical-lr, and verticalrl. The default value is horizontal-lr. 
The default behavior is horizontal-lr when the page progression direction is left-to-right or not specified. Use the value horizontal-rl to set the page progression direction to right-to-left. 
Use the value vertical-rl to set a page progression direction of right-to-left for Chinese, Japanese, and Korean books.  
<itemref idref="page-id" properties="page-spread-left"/> 	Required for Virtual Panels in comics and manga; optional for other fixed-layout books. Allows publishers to specify page layouts (synthetic spreads) at the page level and can vary throughout the book. The page properties should be specified in the itemref elements (child of <spine> element in the OPF file).  
Valid values are page-spread-left, pagespread-right, page-spread-center, facing-page-left, facing-page-right, and 
layout-blank. The value layout-blank can be used independently or in conjunction with other valid values.  
The default value is page-spread-center. 
<meta name="book-type" content="comic"/> 	Required for all graphic novels; optional for other fixed-layout books. Removes reader functionality (e.g., share) which may not be relevant for certain books such as children’s. Valid values are children or comic.  
 
  Image Guidelines 
When optimized for the 2013 Kindle Fire HD 8.9”, graphic novels should maintain a 1920 x 1200 aspect ratio. The image resolution will differ depending on the zoom factor required for Kindle Panel View. 
However, Amazon recommends planning for a high quality reading experience at 2X magnification. 
Images must be in the JPEG format. Amazon recommends using an image resolution of at least 300 ppi. There are five standard zoom factors: 
Zoom 
Factor 	When to Use 	Required 
Image 
Resolution 
100% 	Avoid using this zoom factor. It offers no magnification and poses an accessibility challenge for users.  	1920 x 1200 pixels 
125% 	Only use this zoom factor when it is absolutely necessary to enlarge a very large panel. This allows the user to see a large action scene, but with the downside of limited enlargement.  	2400 x 1500 pixels 
150% 	This is the default and preferred zoom factor. Use this zoom factor whenever possible. 	2880 x 1800 pixels 
200% 	Use this zoom factor for small text. 	3840 x 2400 pixels 
250% 	Only use this zoom factor when two physical pages are stitched together in the HTML file and displayed at once and content appears especially small as a result. The downside is that the enlarged panel only represents a small portion of the original page.  	4800 x 3000 pixels 
Image quality for graphic novels requires that images follow the resolution standards listed in this section and maintain a consistent aspect ratio. Most importantly, optimize images for clarity of background art as well as readability of text. These two factors guarantee the highest quality for the graphic novel format.  
  Panel View (Region Magnification) 
Panel View for graphic novels offers a unique reading experience. It addresses accessibility and lets users experience the flow of action on each page in a high-resolution, easy-to-use manner. Users can dismiss Panel View at any time to view the entire page. For an example of Panel View, see the images in this section.  
The user activates Panel View by double tapping a “tap target”. The active area (source element) is hidden and the Panel View (target element) is displayed.  
To support Panel View, the following steps are required: 
1.	Set the tap target by creating a well-defined container (<div>) element that contains an anchor (<a>) element. The <div> provides the size and position of the tap target. The <a> is sized to fill the <div> and must specify the app-amzn-magnify class. The anchor should also have the following attributes stored in a JSON object as part of the data-app-amzn-magnify value: a. "targetId":"<string:elementId>" = unique element id of the Panel View HTML element that represents the enlarged region 
b. "ordinal":<integer:reading order> = reading order of the magnification areas (the order in which panels appear as part of the reading flow) 
2.	Create a target view panel <div> element that is sized and positioned to display the action that best reflects the tap target.  
  
Snapshot of fixed layout content 	  
Snapshot of the same content with Panel View activated 
Example: 
<div> 
<img src="images/page_002.jpg" alt="Comic Book Images" class="singlePage" /> 
</div> 
<div id="page_002-1"> 
<a class="app-amzn-magnify" data-app-amzn-magnify='{"targetId":"page_002-1magTargetParent", "ordinal":1}'></a> 
</div> 
… 
<div id="page_002-1-magTargetParent" class="target-mag-parent"> 
<div class="target-mag-lb"> 
</div> 
<div id="page_002-1-magTarget" class="target-mag"> 
<img  src="images/page_002.jpg" alt="Comic Book Images"/> 
</div> 
</div> 
  Virtual Panels in Comics and Manga 
The Virtual Panels feature is activated for comics and manga books in the absence of publisher-provided panels. The RegionMagnification metadata is used to identify whether the publisher has provided panel information. If the publisher has included Region Magnification panels on any page, the Kindle Virtual Panel view is not enabled. 
By default, every page is divided into four panels based on the primary-writing-mode value. The examples below indicate the order of the panels. 
Example: 
 
 
 
Landscape mode: 
 
 
12.4.1 Requirement #1: Using a Synthetic Spread When Orientation-Lock Equals None  
If orientation is not locked, content should be designed for both portrait and landscape mode. Some devices show a synthetic spread with two pages side-by-side in landscape mode. Every page intended to be used in a synthetic spread is expected to have a defined paired page in landscape orientation. In portrait orientation, the pairs are ignored. 
Pages to be used in synthetic spreads should be tagged with the properties page-spread-left or page-spread-right. Every left page should have a right page associated and vice-versa. Single pages can be centered on the device in landscape mode by using the property page-spread-center. 
 
In portrait mode, the two pages will be rendered separately as shown below: 
 
 
If none of the properties are specified or if a page is tagged page-spread-left without a matching page-spread-right (or vice-versa), Kindle assumes page-spread-center and centers pages with no page-spread property when the device is in landscape mode. 
The following example assumes primary-writing-mode equals horizontal-lr or vertical-lr. 
Example: 
<spine>  
<itemref idref="page1" /> <!—NOTE: assumed to be properties="page-spread-center" --> <itemref idref="page2" /> <!— NOTE: assumed to be properties="page-spread-center" --> 
<itemref idref="page3" properties="page-spread-left"/> <!— NOTE: synthetic spread’s left viewport --> 
<itemref idref="page4" properties="page-spread-right"/> <!— NOTE: synthetic spread’s; right viewport --> 
</spine> 
The following example assumes primary-writing-mode equals horizontal-rl or vertical-rl. 
Example: 
<spine>  
<itemref idref="page1" /> <!— NOTE: assumed to be properties="facing-page-right" --> 
<itemref idref="page2" /> <!— NOTE: assumed to be properties="facing-page-left" --> 
<itemref idref="page3" properties="page-spread-right"/> <!— NOTE: synthetic spread’s right viewport --> 
<itemref idref="page4" properties="page-spread-left"/> <!— NOTE: synthetic spread’s left viewport --> 
</spine> 
In cases where a left page does not have an equivalent right page (or vice-versa), the publisher may insert a blank HTML page and add the property layout-blank to the page, unless it is the last page. Optionally, the blank page can include the book title and watermark by design. 
Pages with the layout-blank property are only rendered in landscape mode and are ignored in portrait mode. 
In some cases, the publisher may wish to insert a blank page that always renders in both portrait and landscape modes. In this instance, do not use the layout-blank property. Use the same synthetic spread rules as noted above and reference an image file that contains a “blank” JPEG. 
The following example assumes primary-writing-mode equals horizontal-lr or vertical-lr. 
Example: 
<spine>  
<itemref idref="page1" /> <!— NOTE: assumed to be properties="page-spread-left" --> 
<itemref idref="blank-page"  properties="layout-blank"/> <!— NOTE: assumed to be properties="page-spread-right". Ignored in portrait mode. --> 
<itemref idref="page2" properties="page-spread-left"/> <!— NOTE: synthetic spread’s left viewport --> 
<itemref idref="page3" properties="page-spread-right"/> <!—NOTE: synthetic spread’s right viewport --> 
</spine> 
  