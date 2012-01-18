Ext.data.JsonP.Ext_ux_ToolbarDroppable({"mixedInto":[],"tagname":"class","meta":{},"allMixins":[],"files":[{"href":"ToolbarDroppable.html#Ext-ux-ToolbarDroppable","filename":"ToolbarDroppable.js"}],"aliases":{},"uses":[],"members":{"event":[],"property":[{"meta":{},"tagname":"property","owner":"Ext.ux.ToolbarDroppable","name":"afterLayout","id":"property-afterLayout"},{"meta":{},"tagname":"property","owner":"Ext.ux.ToolbarDroppable","name":"dropTarget","id":"property-dropTarget"},{"meta":{},"tagname":"property","owner":"Ext.ux.ToolbarDroppable","name":"toolbar","id":"property-toolbar"}],"method":[{"meta":{},"tagname":"method","owner":"Ext.ux.ToolbarDroppable","name":"constructor","id":"method-constructor"},{"meta":{},"tagname":"method","owner":"Ext.ux.ToolbarDroppable","name":"addDDGroup","id":"method-addDDGroup"},{"meta":{},"tagname":"method","owner":"Ext.ux.ToolbarDroppable","name":"calculateEntryIndex","id":"method-calculateEntryIndex"},{"meta":{},"tagname":"method","owner":"Ext.ux.ToolbarDroppable","name":"canDrop","id":"method-canDrop"},{"meta":{},"tagname":"method","owner":"Ext.ux.ToolbarDroppable","name":"createDropTarget","id":"method-createDropTarget"},{"meta":{},"tagname":"method","owner":"Ext.ux.ToolbarDroppable","name":"createItem","id":"method-createItem"},{"meta":{},"tagname":"method","owner":"Ext.ux.ToolbarDroppable","name":"init","id":"method-init"},{"meta":{},"tagname":"method","owner":"Ext.ux.ToolbarDroppable","name":"notifyDrop","id":"method-notifyDrop"},{"meta":{},"tagname":"method","owner":"Ext.ux.ToolbarDroppable","name":"notifyOver","id":"method-notifyOver"}],"css_var":[],"css_mixin":[],"cfg":[]},"inheritable":false,"extends":null,"statics":{"property":[],"event":[],"method":[],"css_var":[],"css_mixin":[],"cfg":[]},"alternateClassNames":[],"private":false,"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/ToolbarDroppable.html#Ext-ux-ToolbarDroppable' target='_blank'>ToolbarDroppable.js</a></div></pre><div class='doc-contents'><p>Plugin which allows items to be dropped onto a toolbar and be turned into new Toolbar items.\nTo use the plugin, you just need to provide a createItem implementation that takes the drop\ndata as an argument and returns an object that can be placed onto the toolbar. Example:</p>\n\n<pre><a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.ux.ToolbarDroppable\" rel=\"Ext.ux.ToolbarDroppable\" class=\"docClass\">Ext.ux.ToolbarDroppable</a>', {\n  createItem: function(data) {\n    return <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.button.Button\" rel=\"Ext.button.Button\" class=\"docClass\">Ext.Button</a>', {text: data.text});\n  }\n});\n</pre>\n\n\n<p>The afterLayout function can also be overridden, and is called after a new item has been\ncreated and inserted into the Toolbar. Use this for any logic that needs to be run after\nthe item has been created.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-afterLayout' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.ToolbarDroppable'>Ext.ux.ToolbarDroppable</span><br/><a href='source/ToolbarDroppable.html#Ext-ux-ToolbarDroppable-property-afterLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.ToolbarDroppable-property-afterLayout' class='name expandable'>afterLayout</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>Called after a new button has been created and added to the toolbar. ...</div><div class='long'><p>Called after a new button has been created and added to the toolbar. Add any required cleanup logic here</p>\n</div></div></div><div id='property-dropTarget' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.ToolbarDroppable'>Ext.ux.ToolbarDroppable</span><br/><a href='source/ToolbarDroppable.html#Ext-ux-ToolbarDroppable-property-dropTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.ToolbarDroppable-property-dropTarget' class='name not-expandable'>dropTarget</a><span> : <a href=\"#!/api/Ext.dd.DropTarget\" rel=\"Ext.dd.DropTarget\" class=\"docClass\">Ext.dd.DropTarget</a></span></div><div class='description'><div class='short'><p>The drop target attached to the toolbar instance</p>\n</div><div class='long'><p>The drop target attached to the toolbar instance</p>\n</div></div></div><div id='property-toolbar' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.ToolbarDroppable'>Ext.ux.ToolbarDroppable</span><br/><a href='source/ToolbarDroppable.html#Ext-ux-ToolbarDroppable-property-toolbar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.ToolbarDroppable-property-toolbar' class='name not-expandable'>toolbar</a><span> : <a href=\"#!/api/Ext.toolbar.Toolbar\" rel=\"Ext.toolbar.Toolbar\" class=\"docClass\">Ext.toolbar.Toolbar</a></span></div><div class='description'><div class='short'><p>The toolbar instance that this plugin is tied to</p>\n</div><div class='long'><p>The toolbar instance that this plugin is tied to</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.ToolbarDroppable'>Ext.ux.ToolbarDroppable</span><br/><a href='source/ToolbarDroppable.html#Ext-ux-ToolbarDroppable-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.ux.ToolbarDroppable-method-constructor' class='name expandable'>Ext.ux.ToolbarDroppable</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addDDGroup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.ToolbarDroppable'>Ext.ux.ToolbarDroppable</span><br/><a href='source/ToolbarDroppable.html#Ext-ux-ToolbarDroppable-method-addDDGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.ToolbarDroppable-method-addDDGroup' class='name expandable'>addDDGroup</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> ddGroup</span> )</div><div class='description'><div class='short'>Adds the given DD Group to the drop target ...</div><div class='long'><p>Adds the given DD Group to the drop target</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ddGroup</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The DD Group</p>\n</div></li></ul></div></div></div><div id='method-calculateEntryIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.ToolbarDroppable'>Ext.ux.ToolbarDroppable</span><br/><a href='source/ToolbarDroppable.html#Ext-ux-ToolbarDroppable-method-calculateEntryIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.ToolbarDroppable-method-calculateEntryIndex' class='name expandable'>calculateEntryIndex</a>( <span class='pre'><a href=\"#!/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> e</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Calculates the location on the toolbar to create the new sorter button based on the XY of the\ndrag event ...</div><div class='long'><p>Calculates the location on the toolbar to create the new sorter button based on the XY of the\ndrag event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : <a href=\"#!/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a><div class='sub-desc'><p>The event object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The index at which to insert the new button</p>\n</div></li></ul></div></div></div><div id='method-canDrop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.ToolbarDroppable'>Ext.ux.ToolbarDroppable</span><br/><a href='source/ToolbarDroppable.html#Ext-ux-ToolbarDroppable-method-canDrop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.ToolbarDroppable-method-canDrop' class='name expandable'>canDrop</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> data</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>Returns true if the drop is allowed on the drop target. ...</div><div class='long'><p>Returns true if the drop is allowed on the drop target. This function can be overridden\nand defaults to simply return true</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Arbitrary data from the drag source</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>True if the drop is allowed</p>\n</div></li></ul></div></div></div><div id='method-createDropTarget' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.ToolbarDroppable'>Ext.ux.ToolbarDroppable</span><br/><a href='source/ToolbarDroppable.html#Ext-ux-ToolbarDroppable-method-createDropTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.ToolbarDroppable-method-createDropTarget' class='name expandable'>createDropTarget</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Creates a drop target on the toolbar ...</div><div class='long'><p>Creates a drop target on the toolbar</p>\n</div></div></div><div id='method-createItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.ToolbarDroppable'>Ext.ux.ToolbarDroppable</span><br/><a href='source/ToolbarDroppable.html#Ext-ux-ToolbarDroppable-method-createItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.ToolbarDroppable-method-createItem' class='name expandable'>createItem</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> data</span> ) : Mixed</div><div class='description'><div class='short'>Creates the new toolbar item based on drop data. ...</div><div class='long'><p>Creates the new toolbar item based on drop data. This method must be implemented by the plugin instance</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Arbitrary data from the drop</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Mixed</span><div class='sub-desc'><p>An item that can be added to a toolbar</p>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.ToolbarDroppable'>Ext.ux.ToolbarDroppable</span><br/><a href='source/ToolbarDroppable.html#Ext-ux-ToolbarDroppable-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.ToolbarDroppable-method-init' class='name expandable'>init</a>( <span class='pre'><a href=\"#!/api/Ext.toolbar.Toolbar\" rel=\"Ext.toolbar.Toolbar\" class=\"docClass\">Ext.toolbar.Toolbar</a> toolbar</span> )</div><div class='description'><div class='short'>Initializes the plugin and saves a reference to the toolbar ...</div><div class='long'><p>Initializes the plugin and saves a reference to the toolbar</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>toolbar</span> : <a href=\"#!/api/Ext.toolbar.Toolbar\" rel=\"Ext.toolbar.Toolbar\" class=\"docClass\">Ext.toolbar.Toolbar</a><div class='sub-desc'><p>The toolbar instance</p>\n</div></li></ul></div></div></div><div id='method-notifyDrop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.ToolbarDroppable'>Ext.ux.ToolbarDroppable</span><br/><a href='source/ToolbarDroppable.html#Ext-ux-ToolbarDroppable-method-notifyDrop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.ToolbarDroppable-method-notifyDrop' class='name expandable'>notifyDrop</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> dragSource, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> event, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> data</span> )</div><div class='description'><div class='short'>Called when the drop has been made. ...</div><div class='long'><p>Called when the drop has been made. Creates the new toolbar item, places it at the correct location\nand calls the afterLayout callback.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dragSource</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>event</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-notifyOver' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.ToolbarDroppable'>Ext.ux.ToolbarDroppable</span><br/><a href='source/ToolbarDroppable.html#Ext-ux-ToolbarDroppable-method-notifyOver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.ToolbarDroppable-method-notifyOver' class='name expandable'>notifyOver</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> dragSource, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> event, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> data</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Custom notifyOver method which will be used in the plugin's internal DropTarget ...</div><div class='long'><p>Custom notifyOver method which will be used in the plugin's internal DropTarget</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dragSource</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>event</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The CSS class to add</p>\n</div></li></ul></div></div></div></div></div></div></div>","name":"Ext.ux.ToolbarDroppable","singleton":false,"code_type":"ext_define","subclasses":[],"superclasses":[],"component":false,"id":"class-Ext.ux.ToolbarDroppable","mixins":[],"requires":[],"inheritdoc":null});