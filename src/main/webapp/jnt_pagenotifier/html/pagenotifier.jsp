<%@ taglib prefix="jcr" uri="http://www.jahia.org/tags/jcr" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="functions" uri="http://www.jahia.org/tags/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="template" uri="http://www.jahia.org/tags/templateLib" %>
<template:addResources type="css" resources="pnotif.css,jquery.jgrowl.css"/>
<template:addResources type="javascript" resources="jquery.js,jquery-ui.min.js,jquery.jgrowl.js,jgrowlsmile.js"/>
<jcr:nodeProperty node="${currentNode}" name="jcr:createdBy" var="note_creator"/>
<c:choose>
      <c:when test="${renderContext.user.name eq note_creator.string}">
      	<div class="mynotif">
      </c:when>
      <c:otherwise>
      	<div class="page_notifier">
      </c:otherwise>
</c:choose>
<span class="note_uuid">JCRId de la note: ${currentNode.UUID}</span>
<span class="author">${note_creator.string}</span>
<span class="note_text">${currentNode.properties.pnotificationText.string}</span>
</div>