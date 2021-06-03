require "test_helper"

class Api::RealtorsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_realtors_index_url
    assert_response :success
  end

  test "should get show" do
    get api_realtors_show_url
    assert_response :success
  end

  test "should get create" do
    get api_realtors_create_url
    assert_response :success
  end

  test "should get update" do
    get api_realtors_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_realtors_destroy_url
    assert_response :success
  end
end
