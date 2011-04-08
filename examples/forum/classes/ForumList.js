Ext.define('ForumBrowser.ForumList', {

    extend: 'Ext.tree.TreePanel',
    
    alias: 'widget.forumlist',
    
    rootVisible: false,
    lines: false,
    defaultForum: 40,
    
    initComponent: function(){
        Ext.apply(this, {
            viewConfig: {
                getRowClass: function(record) {
                    if (!record.get('leaf')) {
                        return 'forum-parent';
                    }
                }
            },
            store: Ext.create('Ext.data.TreeStore', {
                model: 'ForumBrowser.Forum',
                root: {
                    expanded: true
                },
                proxy: {
                    type: 'scripttag',
                    url: 'http://sencha.com/forum/forums-remote.php',
                    reader: {
                        type: 'json',
                        root: 'children'
                    }
                },
                listeners: {
                    single: true,
                    scope: this,
                    load: this.onFirstLoad
                }
            })
        });
        this.callParent();
        this.getSelectionModel().on({
            scope: this,
            select: this.onSelect
        });
    },
    
    onFirstLoad: function(){
        var rec = this.store.getNodeById(this.defaultForum);
        this.getSelectionModel().select(rec);
    },
    
    onSelect: function(selModel, rec){
        if (rec.get('leaf')) {
            this.ownerCt.loadForum(rec);
        }
    }
});