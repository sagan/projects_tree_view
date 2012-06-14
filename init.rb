require 'redmine'

# Patches to the Redmine core.
Rails.configuration.to_prepare do
  require_dependency 'projects_helper'
  ProjectsHelper.send(:include, ProjectstreeviewProjectsHelperPatch)
end

Redmine::Plugin.register :projects_tree_view do
  name 'Projects Tree View plugin'
  author 'Chris Peterson and Github community'
  description 'This is a Redmine plugin which will turn the projects page into a tree view'
  url 'https://github.com/cforce/projects_tree_view'
  version '0.0.6'
  requires_redmine :version_or_higher => '2.0.0'
end

class ProjectsTreeViewListener < Redmine::Hook::ViewListener
  # Adds javascript and stylesheet tags
  render_on :view_layouts_base_html_head, :inline => <<-EOT
  <%= javascript_include_tag 'projects_tree_view', :plugin => 'projects_tree_view' %>
  <%= stylesheet_link_tag 'projects_tree_view', :plugin => 'projects_tree_view' %>
  EOT
end
