import { TestBed } from "@angular/core/testing";
import { ModulesOverviewService } from "./modules-overview.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
// import {HttpTes}

  let service: ModulesOverviewService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ModulesOverviewService]
    });
    service = TestBed.inject(ModulesOverviewService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should handle error when retrieving modules fails', () => {
    // Arrange
    const errorMessage = '404 Not Found';

    // Act
    service.getModules().subscribe({
      // Assert
      error: error => {
        expect(error).toEqual(errorMessage);
      }
    });

    // Assert
    const req = httpTestingController.expectOne('your_api_endpoint'); // replace 'your_api_endpoint' with actual endpoint
    expect(req.request.method).toEqual('GET');

    // Respond with error
    req.flush(null, { status: 404, statusText: errorMessage });
  });
it('should retrieve all modules successfully', () => {
    // Arrange
    const mockModules = [
      { id: 1, name: 'Module 1', description: '', members: [] },
      { id: 2, name: 'Module 2', description: '', members: [] },
      // Add more mock modules as needed
    ];

    // Act
    service.getModules().subscribe(modules => {
      // Assert
      expect(modules).toEqual(mockModules);
    });

    // Assert
    const req = httpTestingController.expectOne('your_api_endpoint'); // replace 'your_api_endpoint' with actual endpoint
    expect(req.request.method).toEqual('GET');

    // Respond with mock modules
    req.flush(mockModules);
  });
