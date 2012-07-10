/* Function to allow the projects to show up as a tree */

function toggleOddEven()
{
  var isEven = false;

  $$('table.list tr.project').each(function(e) {
    if (!e.hasClassName('hide')) {
      e.removeClassName('odd');
      e.removeClassName('even');
      e.addClassName(isEven ? 'even' : 'odd');
      isEven = !isEven;
    }
  })
}

function toggleShowHide(projectId)
{
  var project = $('project' + projectId);
  var isClosed = project.className.include('closed');

  $$('table.list tr.' + projectId).each(function(e) {
    if (isClosed) {
      e.removeClassName('hide');
    } else {
      e.addClassName('hide');
    }
  })

  project.removeClassName('closed');
  project.removeClassName('open');
  project.addClassName(isClosed ? 'open' : 'closed');

  toggleOddEven();
}

function expandAll()
{
  $$('table.list tr.project').each(function(e) {
    e.removeClassName('closed');
    e.removeClassName('hide');
    e.addClassName('open');
  });

  toggleOddEven();
}

function collapseAll()
{
  $$('table.list tr.project').each(function(e) {
    e.removeClassName('open');
    e.addClassName('closed');
    if (!e.hasClassName('root')) {
      e.addClassName('hide');
    }
  });

  toggleOddEven();
}
