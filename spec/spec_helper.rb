# frozen_string_literal: true

Encoding.default_external = Encoding::UTF_8
require 'bundler/setup'
require 'rspec'
require_relative '../lib/doc_builder_testing'

# Get either DocBuilder of WebDocBuilder
# depending of env var
# @return [WebDocBuilderWrapper, DocBuilderWrapper]
def builder
  @builder ||= if web_builder?
                 WebDocBuilderWrapper.new(
                   jwt_key: 'h6DwLNlgK0ALVDvW8V8FfNJK8NSH6AiZ',
                   jwt_header: 'Authorization',
                   documentserver_path: 'http://192.168.100.2'
                 )
               else
                 DocBuilderWrapper.new
               end
end


# @return [String] which platform is used to run builder tests
def builder_platform
  ENV.fetch('BUILDER_PLATFORM', 'DESKTOP')
end

# Check if platform for builder is web
# @return [Boolean] result of check
def web_builder?
  builder_platform == 'WEB'
end
