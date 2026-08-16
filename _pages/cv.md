---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 5
# cv_pdf: /assets/pdf/CV.pdf # you can also use external links here
# cv_format: rendercv # options: rendercv, jsonresume
# description: This is a description of the page. You can modify it in '_pages/cv.md'. You can also change or remove the top pdf download button.
# toc:
  # sidebar: left
---

<style>
  .cv-embed {
    width: 100%;
    position: relative;
  }
  @media (max-width: 768px) {
    .cv-embed iframe {
      height: 500px;
    }
  }
</style>

<div class="cv-embed">
  <iframe src="{{ '/assets/pdf/CV_no_ref.pdf' | relative_url }}" width="100%" height="800px" style="border: none;">
    This browser does not support PDFs. Please download the PDF to view it: 
    <a href="{{ '/assets/pdf/CV.pdf' | relative_url }}">Download CV</a>.
  </iframe>
</div>
