/* Function to allow the projects to show up as a tree */

function toggleOddEven() {
  var isEven = false;

  $$('table.list tr.project:not(.hide)').each(function(e) {
    e.removeClassName('odd');
    e.removeClassName('even');
    e.addClassName(isEven ? 'even' : 'odd');
    isEven = !isEven;
  })
}

function expandProjectTree(id) {
  $$('table.list tr.child.' + id).each(function(e) {
    e.removeClassName('hide');
    if (e.hasClassName('open')) {
      expandProjectTree(e.identify());
    }
  })
}

function collapseProjectTree(id) {
  $$('table.list tr.child.' + id).each(function(e) {
    e.addClassName('hide');
    collapseProjectTree(e.identify());
  })
}

function toggleShowHide(id) {
  with($(id)) {
    if (hasClassName('open')) {
      collapseProjectTree(id);
      removeClassName('open');
      addClassName('collapsed');
    } else {
      expandProjectTree(id);
      removeClassName('collapsed');
      addClassName('open');
    }
  }

  toggleOddEven();
}

function expandAll() {
  $$('table.list tr.project').each(function(e) {
    e.removeClassName('hide');
    if (!e.hasClassName('leaf')) {
      e.removeClassName('collapsed');
      e.addClassName('open');
    }
  });

  toggleOddEven();
}

function collapseAll() {
  $$('table.list tr.project').each(function(e) {
    e.removeClassName('open');
    e.addClassName('collapsed');
    if (!e.hasClassName('root')) {
      e.addClassName('hide');
    }
  });

  toggleOddEven();
}
