CREATE PROCEDURE InsertOrReturnSubject
    @KonuIsmi NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;

    -- Check if the subject already exists
    IF EXISTS (SELECT 1 FROM konu WHERE name = @KonuIsmi)
    BEGIN
        -- Return the existing record
        SELECT id, name
        FROM subjects
        WHERE name = @KonuIsmi;
    END
    ELSE
    BEGIN
        -- Insert the new record
        INSERT INTO subjects (name)
        OUTPUT INSERTED.id, INSERTED.name
        VALUES (@KonuIsmi);
    END
END;

